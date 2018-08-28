import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertMyComponent } from './alert-my.component';

describe('AlertMyComponent', () => {
  let component: AlertMyComponent;
  let fixture: ComponentFixture<AlertMyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertMyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertMyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
