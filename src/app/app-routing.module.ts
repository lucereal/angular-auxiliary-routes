import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OneComponent } from './one/one.component';
import {TwoComponent } from './two/two.component';

import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';

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
    outlet:'secondary'
  },
  {
    path: 'two/:id', component: TwoComponent,
    outlet:'secondary'
  },
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
