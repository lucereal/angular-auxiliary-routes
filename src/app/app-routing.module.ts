import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';

import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { from } from 'rxjs';

const routes: Routes = [
  //{ path: '', redirectTo: 'one', pathMatch: 'full' },
  //{ path: '', redirectTo: 'two', pathMatch: 'full', outlet: 'secondary' },

  {
    path: 'one', component: OneComponent

  },
  {
    path: 'one/:id', component: OneComponent

  },
  {
    path: 'two', component: TwoComponent,
    outlet: 'secondary'
  },
  {
    path: 'two/:id', component: TwoComponent,
    outlet: 'secondary'
  },
  {
    path: 'three', component: ThreeComponent,
    outlet: 'third'
  },
  {
    path: 'three/:id', component: ThreeComponent,
    children: [
      
      {path: 'four', component: FourComponent},
      { path: 'four/:id', component: FourComponent }
    ],
    outlet: 'third'
  },
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
