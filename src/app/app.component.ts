import { Component } from '@angular/core';
import { Account } from './model/account.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo01';
  url  = 'http://www.google.com';
  isShow = false;
  weeks = ['星期一', '星期二', '星期三'];
  users = [
    {name: 'Lux', age: 18},
    {name: 'blackKitty', age: 20}
  ];
  now = new Date();
  acc: Account = {
    account: 'user01',
    password: 'pwd',
  };

  sayHi(val: string = '123') {
    //alert('hi');
    alert(val);
  }

  ChangeShow() {
    this.isShow = !this.isShow;
  }
}
