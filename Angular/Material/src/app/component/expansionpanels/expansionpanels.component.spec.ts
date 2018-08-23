import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionpanelsComponent } from './expansionpanels.component';

describe('ExpansionpanelsComponent', () => {
  let component: ExpansionpanelsComponent;
  let fixture: ComponentFixture<ExpansionpanelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpansionpanelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionpanelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
