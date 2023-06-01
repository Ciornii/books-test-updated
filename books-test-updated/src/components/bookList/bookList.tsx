import './bookList.scss';
import { GoogleBook, LocalBook } from '../../models/books';
import { useAppSelector } from '../../hooks/hooks';
import Book from '../book/Book';
import { useGetBooksByNameQuery } from '../../redux/api/booksAPI';
import { selectSearchTerm } from '../../redux/slices/search';

const BookList = () => {
  const searchTerm = useAppSelector(selectSearchTerm)
  const { data, error, isLoading } = useGetBooksByNameQuery(searchTerm)

  return (
    <div className='books-wrapper'>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          {
            data.items?.map((book: GoogleBook) => {
              const localBook: LocalBook = {
                id: book.id,
                title: book.volumeInfo.title,
                subtitle: book.volumeInfo.subtitle,
                image: book.volumeInfo.imageLinks?.thumbnail?.replace('zoom=2', 'zoom=1').replace('http', 'https'),
                description: book.volumeInfo.description,
                authors: book.volumeInfo.authors,
              };
              return (
                <Book book={localBook} key={book.id} />
              )
            })
          }
        </>
      ) : null}
    </div>
  );
};
export default BookList;
