import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lesson9',
  templateUrl: './lesson9.component.html',
  styleUrls: ['./lesson9.component.scss']
})
export class Lesson9Component implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.snapshot.paramMap.get('id');
  }

  go() {
    this.router.navigate(['lon8']);
  }

}
