import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveMatchComponent } from './live-match.component';

describe('LiveMatchComponent', () => {
  let component: LiveMatchComponent;
  let fixture: ComponentFixture<LiveMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveMatchComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
