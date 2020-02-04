import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Lesson1Component } from './lesson1/lesson1.component';
import { Lesson2Component } from './lesson2/lesson2.component';
import { Lesson3Component } from './lesson3/lesson3.component';
import { Lesson4Component } from './lesson4/lesson4.component';
import { Lesson5Component } from './lesson5/lesson5.component';
import { Lesson6Component } from './lesson6/lesson6.component';
import { Lesson8Component } from './lesson8/lesson8.component';

const routes: Routes = [
  {path:'', redirectTo:'lon1', pathMatch:'full'},
  {path:'lon1', component: Lesson1Component},
  {path:'lon2', component: Lesson2Component},
  {path:'lon3', component: Lesson3Component},
  {path:'lon4', component: Lesson4Component},
  {path:'lon5', component: Lesson5Component},
  {path:'lon6', component: Lesson6Component},
  {path:'lon8', component: Lesson8Component},
  {path:'**', component: Lesson1Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
