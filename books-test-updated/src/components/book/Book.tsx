
import './book.scss';
import { NavLink } from 'react-router-dom';
import { getLimitedSymbol } from '../../utils';
import { LocalBook } from '../../models/books';

interface BookInterface {
  book: LocalBook
}

const Book = (props: BookInterface) => {
  const { book } = props;

  return (
    <NavLink className='book' to={`/detailed/${book.id}`}>
      <div className='book__title'>{getLimitedSymbol(`${book.title}`)}</div>
      <div className='book__img'>
        {book?.image ?
          <img
            src={book?.image}
            alt={book?.title}
            width='128'
            height='169'
            loading='lazy'
          /> :
          <img
            src={'https://placehold.co/128x169?text=No+Image'}
            alt={book?.title}
            width='128'
            height='169'
            loading='lazy'
          />
        }
      </div>
      {book.subtitle && (
        <div className='book__subtitle'>{getLimitedSymbol(`${book.subtitle}`)}</div>
      )}
      {book.description && (
        <div
          className='book__desc'
          dangerouslySetInnerHTML={{
            __html: getLimitedSymbol(`${book.description}`),
          }}
        />
      )}
    </NavLink>
  );
}


export default Book;
