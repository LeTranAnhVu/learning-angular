import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.sass']
})
export class Child2Component implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('ngOnInit from child2');
    this.route.paramMap.subscribe(param => {
      console.log(param.get('id'));
    });



  }
  ngOnDestroy() {
    console.log('destroy from child2');
  }

}
