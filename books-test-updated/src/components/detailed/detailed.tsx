import React, { FC, useEffect, useState } from 'react';
import './detailed.scss';
import { useParams, useNavigate } from 'react-router-dom';
import { LocalBook } from '../../models/books';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getLimitedSymbol } from '../../utils';
import { useGetBookByIdQuery } from '../../redux/api/booksAPI';
import { selectFavorites, addFavorite, removeFromFavorite } from '../../redux/slices/favorites';

const Detailed: FC = () => {
  const id = useParams().id || ''
  let navigate = useNavigate();
  const dispatch = useAppDispatch()
  const favorites = useAppSelector(selectFavorites)
  const [favorite, setFavorite] = useState(false);
  const { isLoading, error, data } = useGetBookByIdQuery(id)

  const book: LocalBook = {
    id: id,
    title: data?.volumeInfo?.title,
    subtitle: data?.volumeInfo?.subtitle,
    image: data?.volumeInfo?.imageLinks?.thumbnail?.replace('zoom=1', 'zoom=2').replace('http', 'https'),
    description: data?.volumeInfo?.description?.substring(0, 1500),
    authors: data?.volumeInfo?.authors
  }

  useEffect(() => {
    if (favorites.find((e: LocalBook) => e.id === id)) {
      setFavorite(true);
    } else {
      setFavorite(false);
    }
  }, [favorites]);

  const favoriteHandler = (book: LocalBook) => {
    if (!favorite) { dispatch(addFavorite(book)) }
    else { dispatch(removeFromFavorite(book.id)) }
    setFavorite(!favorite);
  };

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error, please try again later...</p>
  if (!book) return <p>Couldn't find book</p>
  return (
    <div>
      <button className='back-btn' onClick={() => { navigate(-1) }}>
        <i className='fas fa-arrow-alt-circle-left'></i>
      </button>
      {book ? (
        <div className='detailed'>
          <div className='detailed__title'>{book?.title}</div>
          <div className='detailed__img'>
            {book.image && (
              <img
                src={book.image}
                alt={book?.title}
                width='300'
                height='440'
              />
            )}
          </div>
          {book.subtitle && (
            <div className='detailed__subtitle'>{getLimitedSymbol(`${book.subtitle}`)}</div>
          )}
          {book.authors && (
            <ul className='detailed__authors'>by:
              {book.authors.map((item: string, index: number) =>
                <li key={index}>{item}</li>)}
            </ul>
          )}
          {book?.description ? (
            <div
              className='detailed__desc'
              dangerouslySetInnerHTML={{ __html: book?.description }}
            />
          ) : (
            <p className='no-result'>This book doesn't have information</p>
          )}
          <div
            className={`detailed__favorite ${favorite ? 'active' : ''}`}
            onClick={() => favoriteHandler(book)}
            title='Set favorite'
          >
            <i className='fas fa-star'></i>
          </div>
        </div>
      ) : (
        <div className='fetching'></div>
      )}
    </div>
  );
};
export default Detailed;
