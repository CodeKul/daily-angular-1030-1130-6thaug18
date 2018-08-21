import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RmbMeComponent } from './rmb-me.component';

describe('RmbMeComponent', () => {
  let component: RmbMeComponent;
  let fixture: ComponentFixture<RmbMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RmbMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RmbMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
