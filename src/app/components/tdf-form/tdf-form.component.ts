import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf-form',
  templateUrl: './tdf-form.component.html',
  styleUrls: ['./tdf-form.component.sass']
})
export class TdfFormComponent implements OnInit {

  constructor() { }
  log(x){
    console.log('from tdf-form');
    console.log(x);
  }
  ngOnInit() {
  }

}
