import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.sass']
})
export class ChildComponent implements OnInit {
  @Output() change = new EventEmitter();
  constructor() { }
  courses = ['angular', 'react', 'nodejs', 'firebase', 'vanilla js'];
  viewMode = 'something else';
  newCourse = '';
  onClick() {
    this.change.emit();
  }
  onAdd() {
    if (this.newCourse) {
      this.courses.push(this.newCourse);
      this.newCourse = '';
    }
  }
  onRemove(whichCourse) {
    if (confirm('Are you sure to delete ' + name)) {
      console.log('Implement delete functionality here');
      this.courses = this.courses.filter((course) => {
        return (course !== whichCourse);
      });
    }

  }
  onEdit(editedCourse) {
    const newCourseName: string = prompt('Please enter ');
    this.courses = this.courses.map((course) => {
      if (course === editedCourse) {
        course = newCourseName;
      } else {
        // do nothing
      }
      return course;
    });
  }
  ngOnInit() {
  }
  changeView(target) {
    this.viewMode = target;
  }

}
