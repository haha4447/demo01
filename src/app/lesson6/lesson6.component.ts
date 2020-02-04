import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lesson6',
  templateUrl: './lesson6.component.html',
  styleUrls: ['./lesson6.component.scss']
})
export class Lesson6Component implements OnInit {

  money :number;
  constructor() { }

  ngOnInit() {
  }

  mChange(money:number){
    this.money = money;
  }

}
