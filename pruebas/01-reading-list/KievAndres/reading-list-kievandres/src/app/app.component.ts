import { Component } from '@angular/core';
import books from '../../../../../01-reading-list/books.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reading-list-kievandres';

  constructor () {
    console.log(books);
  }
}
