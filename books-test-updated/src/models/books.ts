export interface GoogleBook {
  id: string;
  volumeInfo: {
    title: string | undefined;
    subtitle: string | undefined;
    authors: string[] | undefined;
    imageLinks: {
      thumbnail: string | undefined;
    };
    description: string | undefined;
  };
}

export interface GoogleBooksCollection{
  items: GoogleBook[] | undefined;
}

export interface LocalBook {
  id: string;
  title: string | undefined;
  subtitle: string | undefined;
  image: string | undefined;
  description: string | undefined;
  authors: string[] | undefined;
}

export interface LocalBooksCollection {
  books: LocalBook[];
}
