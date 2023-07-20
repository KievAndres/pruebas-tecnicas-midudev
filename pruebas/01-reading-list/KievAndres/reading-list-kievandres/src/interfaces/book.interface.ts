export interface BookAuthor {
  name: string;
  otherBooks: string[];
}

export interface Book {
  title: string;
  pages: number;
  genre: string;
  cover: string;
  synopsis: string;
  year: number;
  ISBN: string;
  author: BookAuthor;
}

export interface LibraryBook {
  book: Book;
}