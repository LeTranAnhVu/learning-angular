import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-check-age-form',
  templateUrl: './check-age-form.component.html',
  styleUrls: ['./check-age-form.component.sass']
})
export class CheckAgeFormComponent implements OnInit {
  @ViewChild('temForm') form;
  age: number;
  birthDay: Date;
  isOver: boolean;
  constructor() { }

  ngOnInit() {
    console.log(new Date());

  }
  checkAgeIsOver18() {
    console.log(this.form);
    const date: Date = new Date(this.form.form.get('birthDay').value);
    // console.log('date', date);
    // console.log('date', typeof date);
    return this.checkAgeIsOver(18, date);
  }
  checkAgeIsOver(limitedAge, date: Date) {
    const now = new Date();
    let age: number = now.getFullYear() - date.getFullYear();
    if (age >= limitedAge + 1) {
      // age 19
      age = age;
    } else if (age >= limitedAge - 1) {
      // age 17 and 18
      const m = now.getMonth() - date.getMonth();
      const d = now.getDate() - date.getDate();
      if (m < 0 || (m === 0 && d < 0)) {
        // thiếu tháng thiếu ngày ==> chưa đủ tuổi
        age--;
      } else if (m === 0 && d > 0) {
        // cùng tháng và hơn ngày ==> tăng thêm 1 tuổi
        age++;
      } else if (m === 0 && d === 0) {
        // ngay ngày sinh nhât ==> tuổi giữa nguyên
        age = age;
      } else if (m > 0) {
        // du thang => tăng thêm 1 tuổi
        age++;
      }
    }

    // kq cuoi cung
    this.age = age;
    // kiem tra
    if (this.age >= limitedAge) {
      this.isOver = true;
      return true;
    }
    this.isOver = false;
    return false;
  }

}

