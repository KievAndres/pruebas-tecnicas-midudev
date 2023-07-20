import { Component } from '@angular/core';
import books from '../../../../../01-reading-list/books.json';
import { Library } from 'src/interfaces/library.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reading-list-kievandres';

  public libraryCollection: Library;

  constructor () {
    this.libraryCollection = books;
  }
}
