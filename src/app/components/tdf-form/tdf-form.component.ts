import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf-form',
  templateUrl: './tdf-form.component.html',
  styleUrls: ['./tdf-form.component.sass']
})
export class TdfFormComponent implements OnInit {

  constructor() { }
  contactMethods = [
    {
      id: 1,
      name: 'mail'
    },
    {
      id: 2,
      name: 'phone'
    },
  ];

  log(x) {
    console.log('from tdf-form');
    console.log(x);
  }
  onSubmit(form) {
    console.log(form.value);
  }
  ngOnInit() {
  }

}
