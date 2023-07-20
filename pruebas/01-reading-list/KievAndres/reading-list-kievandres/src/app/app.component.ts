import { Component } from '@angular/core';
import books from '../../../../../01-reading-list/books.json';
import { Library } from 'src/interfaces/library.interface';
import { Book } from 'src/interfaces/book.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reading-list-kievandres';

  public bookList: Book[];
  public readingList: Book[];

  constructor () {
    this.bookList = this._getBookList(books);
    this.readingList = [];
  }

  private _getBookList(libraryCollection: Library): Book[] {
    return libraryCollection.library.map(libraryItem => libraryItem.book);
  }

  public addToReadingList(book: Book): void {
    this.readingList.push(book);
    this.bookList = this.bookList.filter(bookItem => bookItem.ISBN !== book.ISBN);
  }

  public removeFromReadingList(book: Book): void {
    this.bookList.push(book);
    this.readingList = this.readingList.filter(bookItem => bookItem.ISBN !== book.ISBN);
  }
}
