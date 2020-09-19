import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartMatchPage } from './start-match.page';

describe('StartMatchPage', () => {
  let component: StartMatchPage;
  let fixture: ComponentFixture<StartMatchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartMatchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartMatchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
