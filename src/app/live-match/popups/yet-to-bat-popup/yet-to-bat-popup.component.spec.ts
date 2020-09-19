import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YetToBatPopupComponent } from './yet-to-bat-popup.component';

describe('YetToBatPopupComponent', () => {
  let component: YetToBatPopupComponent;
  let fixture: ComponentFixture<YetToBatPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YetToBatPopupComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YetToBatPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
