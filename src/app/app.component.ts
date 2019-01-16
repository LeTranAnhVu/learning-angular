import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'learning';
  ngu: any;
  onChange(param) {
    console.log('this is ');
    console.log(param.value);
    console.log(typeof param);

  }
  onChildChange() {
    console.log('child changed');
  }
}
