import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtrItmComponent } from './ftr-itm.component';

describe('FtrItmComponent', () => {
  let component: FtrItmComponent;
  let fixture: ComponentFixture<FtrItmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtrItmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtrItmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
