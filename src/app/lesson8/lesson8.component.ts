import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { BookService } from '../book.service';

@Component({
  selector: 'app-lesson8',
  templateUrl: './lesson8.component.html',
  styleUrls: ['./lesson8.component.scss']
})
export class Lesson8Component implements OnInit {
  books: any;
  constructor(
    public httpService: HttpService,
    public bookService: BookService
  ) { }

  ngOnInit() {
    this.httpService.getData().subscribe(
      data => {
        console.log(data);
        this.books = data;
      },
      error => {
        console.log(error);
      },
      () => {
        console.log('finish');
      }
    );

    this.bookService.getBooks().subscribe(
      data => {
        console.log(data[0].name);
      },
      error => {

      },
      () => {

      }
    );

    this.bookService.getBook(1).subscribe(
      data => {
        console.log(data);
      },
      error => {

      },
      () => {

      }
    );
  }

}
