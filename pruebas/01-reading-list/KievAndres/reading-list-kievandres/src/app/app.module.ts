import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookComponent } from '../components/book/book.component';
import { DropdownComponent } from '../components/dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
