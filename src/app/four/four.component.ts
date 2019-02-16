import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import {ObservableInput, Observable} from 'rxjs';

@Component({
  selector: 'app-four',
  styleUrls: ['./four.component.css'],
  template: `
  <div style="border: 2px solid green; padding: 1rem;">
    <p>Fourth Component</p>
    <p>{{name}}</p>
    </div>
  `
})
export class FourComponent implements OnInit {

  name:string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("in four");
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
