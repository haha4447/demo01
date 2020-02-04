import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BmiService } from '../bmi.service';

@Component({
  selector: 'app-lesson1',
  templateUrl: './lesson1.component.html',
  styleUrls: ['./lesson1.component.scss'],
  providers: [BmiService]
})
export class Lesson1Component implements OnInit {
  @Output() mChange: EventEmitter<number> = new EventEmitter<number> ();
  money = 100;

  constructor(
    public bmiService: BmiService
  ) { }

  ngOnInit() {
  }

  moneyChange(money: number){
    this.mChange.emit(money);
  }

  callService() {
    this.bmiService.sayHello();
  }

  changeService() {
    this.bmiService.name = 'lessin1 change';
  }

}
