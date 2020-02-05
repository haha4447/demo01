import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './model/book.model';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  // serverIp = 'http://120.97.26.45:8000/';
  constructor(
    public http: HttpClient
  ) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(environment.serverIp + 'books' );
  }

  getBook(id: number): Observable<Book> {
    return this.http.get<Book>(`${environment.serverIp}books/${id}`);
  }

  postBook(book: Book): Observable<Book>{
    return this.http.post<Book>(`${environment.serverIp}books`, book);
  }

  putBook(id: number, book: Book): Observable<Book>{
    return this.http.post<Book>(`${environment.serverIp}books/${id}`, book);
  }

  deleteBook(id: number) {
    return this.http.delete(`${environment.serverIp}books/${id}`);
  }
}
