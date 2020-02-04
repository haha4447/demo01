import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BmiService {
  name = 'Lux' ;

  constructor() { }

  sayHello() {
    alert(this.name);
  }
}
