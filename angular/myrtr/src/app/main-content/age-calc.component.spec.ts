import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeCalcComponent } from './age-calc.component';

describe('AgeCalcComponent', () => {
  let component: AgeCalcComponent;
  let fixture: ComponentFixture<AgeCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgeCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgeCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
