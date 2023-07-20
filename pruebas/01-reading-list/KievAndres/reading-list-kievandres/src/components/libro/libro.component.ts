import {Component} from '@angular/core';

@Component({
  selector: 'libro',
  templateUrl: 'libro.component.html',
  styleUrls: ['libro.component.scss']
})
export class LibroComponent {
  @Input() libro: Libro;
}