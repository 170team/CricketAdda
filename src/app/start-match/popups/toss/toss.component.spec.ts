import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TossComponent } from './toss.component';

describe('TossComponent', () => {
  let component: TossComponent;
  let fixture: ComponentFixture<TossComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TossComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
