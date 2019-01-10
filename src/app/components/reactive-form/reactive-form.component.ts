import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { UsernameValidator } from 'src/app/validators/username.validators';
import { Profile } from 'selenium-webdriver/firefox';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.sass']
})
export class ReactiveFormComponent implements OnInit {
  form;
  // form = new FormGroup({
  //   profile: new FormGroup({
  //     username: new FormControl('', [Validators.required, UsernameValidator.canNotHaveSpace], UsernameValidator.userExist),
  //     password: new FormControl()
  //   }),
  //   phoneForms: new FormArray([]),
  //   check: new FormControl('')
  // });
  get username() {
    // console.log('hehe', this.form.get('profile').get('username'));
    return this.form.get('profile').get('username');
  }
  get phoneForms(): FormArray {
    return this.form.get('phoneForms') as FormArray;
  }

  addPhoneForm() {
    const phone = this.fb.group({
      area: [],
      prefix: [],
      line: []
    });

    this.phoneForms.push(phone);
  }
  removePhoneForm(i) {
    this.phoneForms.removeAt(i);
  }
  constructor(private fb: FormBuilder) {
    const _fb = this.fb;
    const profile = _fb.group({
      username: _fb.control('', [Validators.required, UsernameValidator.canNotHaveSpace], UsernameValidator.userExist),
      password: _fb.control(''),
    });

    const phoneForms = _fb.array([]);

    this.form = _fb.group({
      profile,
      phoneForms,
      check: _fb.control('')
    });

    this.addPhoneForm();
  }

  ngOnInit() {
  }


}
