import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import {ObservableInput, Observable} from 'rxjs';
@Component({
  selector: 'app-three',

  styleUrls: ['./three.component.css'],
  template: `
  <div style="border: 2px solid yellow; padding: 1rem;">
  <router-outlet></router-outlet>
   <p>
    Component three
    <button><a [routerLink]="['',{ outlets: { 'third': ['three','angular','four'] } }]">angular in three, generate four</a></button>
    <button><a [routerLink]="['',{ outlets: { 'third': ['three','angular'] } }]">delete four</a></button>
    <button><a [routerLink]="['',{ outlets: { 'third': ['three','angular','four','helloworld'] } }]">angular in three, hello world in four</a></button>


  </p>
  <p>{{name}}</p>
  </div>
  `
})

// When you use children inside of your routes the parent component needs to have <router-outlet></router-outlet> inside it's html in order for the children to be loaded inside that parent. Angular Docs on Child Configuration
// Additionally, with routed components it is not necessary to add the component selector inside the html of the parent component as they will be injected automatically by the router below your router-outlet.


export class ThreeComponent implements OnInit {

  name:string = '';
  constructor(private route: ActivatedRoute) { }


  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params:ParamMap):ObservableInput<any> => {
        console.log(params.keys);
        return new Observable<any>((observer) => {
          observer.next(params.get('id'))
          observer.complete();
          return {unsubscribe(){}};
        });
      })
    ).subscribe(data => {
      this.name = data
      console.log(data);
    })
  }
}
