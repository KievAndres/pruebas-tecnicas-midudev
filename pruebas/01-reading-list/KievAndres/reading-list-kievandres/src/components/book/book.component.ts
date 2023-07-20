import { Component, Input } from '@angular/core';
import { Book } from 'src/interfaces/book.interface';

@Component({
  selector: 'book',
  templateUrl: 'book.component.html',
  styleUrls: ['book.component.scss'],
})
export class BookComponent {
  @Input() book!: Book;
}
