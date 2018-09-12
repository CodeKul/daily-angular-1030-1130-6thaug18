import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnPanelComponent } from './btn-panel.component';

describe('BtnPanelComponent', () => {
  let component: BtnPanelComponent;
  let fixture: ComponentFixture<BtnPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
