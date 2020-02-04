import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './model/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  serverIp = 'http://120.97.26.43:8000/';
  constructor(
    public http: HttpClient
  ) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.serverIp + 'books' );
  }

  getBook(id: number): Observable<Book>{
    return this.http.get<Book>(this.serverIp + 'books/' + id);
  }
}
