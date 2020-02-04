import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {
  @Input() buttonTitle: string;
  @Output() bClick: EventEmitter<string> = new EventEmitter<string> (); 
  constructor() { }

  ngOnInit() {
  }

  buttonClick() {
    this.bClick.emit('hello');
  }

}
