import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunOutComponent } from './run-out.component';

describe('RunOutComponent', () => {
  let component: RunOutComponent;
  let fixture: ComponentFixture<RunOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunOutComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
