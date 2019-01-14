import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';


@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.sass']
})
export class Child2Component implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('ngOnInit from child2');
    // this.route.paramMap.subscribe(param => {
    //   console.log(param.get('id'));
    // });

    // this.route.queryParamMap.subscribe(param => {
    //   console.log('query?');
    //   console.log(param.get('page'));
    // })

    // subcribe multiple observables at same time
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).subscribe(combinedResult => {
      const id = combinedResult[0].get('id'); // paramMap
      const page = combinedResult[1].get('page'); //queryParamMap
      console.log('id:', id, '-', 'page:', page);
    })



  }
  ngOnDestroy() {
    console.log('destroy from child2');
  }

}
