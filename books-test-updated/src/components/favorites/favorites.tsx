import React, { FC } from 'react';
import './favorites.scss';
import { useNavigate } from 'react-router-dom';
import Book from '../book/Book';
import { useAppSelector } from '../../hooks/hooks';
import { selectFavorites } from '../../redux/slices/favorites';

const Favorites: FC = () => {
  let navigate = useNavigate();
  const favorites = useAppSelector(selectFavorites)

  return (

    <div className='books-wrapper'>
      <button onClick={() => { navigate(-1) }} className='back-btn'>
        <i className='fas fa-arrow-alt-circle-left'></i>
      </button>
      <h1>Favorites</h1>
      {favorites.length > 0 ? (
        favorites.map(book => <Book book={book} key={book.id} />)
      ) : (
        <p className='no-result'>You don't have favorites books</p>
      )}
    </div>
  )
}

export default Favorites;
