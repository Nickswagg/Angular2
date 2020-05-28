import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularLab2Component } from './angular-lab2.component';

describe('AngularLab2Component', () => {
  let component: AngularLab2Component;
  let fixture: ComponentFixture<AngularLab2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularLab2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularLab2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
