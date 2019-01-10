import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-age-form',
  templateUrl: './check-age-form.component.html',
  styleUrls: ['./check-age-form.component.sass']
})
export class CheckAgeFormComponent implements OnInit {
  age: number;
  birthDay: Date;
  constructor() { }

  ngOnInit() {
  }

}
