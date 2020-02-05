import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { BookService } from '../book.service';
import { Book } from '../model/book.model';

@Component({
  selector: 'app-lesson8',
  templateUrl: './lesson8.component.html',
  styleUrls: ['./lesson8.component.scss']
})
export class Lesson8Component implements OnInit {
  books: Book[];
  book: Book;
  postBook: Book ={
    name: '',
    price: 0,
    description: '',
    is_online: true
  }
  putBook: Book;
  constructor(
    public httpService: HttpService,
    public bookService: BookService
  ) { }

  ngOnInit() {
    this.httpService.getData().subscribe(
      data => {
        console.log(data);
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

    this.bookService.getBook(1).subscribe(
      data => {
        console.log(data);
        this.putBook = data;
      }
    );
  }

  submitBook() {
    this.bookService.postBook(this.postBook).subscribe(
      data => {
        console.log(data);
      }
    )
  }

}
