import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  serverIp = 'http://120.97.26.45:8000/';

  constructor(
    public http: HttpClient
  ) { }

  getData() {
    return this.http.get(this.serverIp + 'books');
  }
}
