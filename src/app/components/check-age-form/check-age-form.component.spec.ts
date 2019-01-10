import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckAgeFormComponent } from './check-age-form.component';

describe('CheckAgeFormComponent', () => {
  let component: CheckAgeFormComponent;
  let fixture: ComponentFixture<CheckAgeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckAgeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckAgeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
