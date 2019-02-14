import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import {ObservableInput, Observable} from 'rxjs';


@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

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
