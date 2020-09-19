import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBatsmanStrickSelectionPopupComponent } from './new-batsman-strick-selection-popup.component';

describe('NewBatsmanStrickSelectionPopupComponent', () => {
  let component: NewBatsmanStrickSelectionPopupComponent;
  let fixture: ComponentFixture<NewBatsmanStrickSelectionPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBatsmanStrickSelectionPopupComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBatsmanStrickSelectionPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
