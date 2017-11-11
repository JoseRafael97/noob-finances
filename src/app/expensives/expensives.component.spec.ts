import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensivesComponent } from './expensives.component';

describe('ExpensivesComponent', () => {
  let component: ExpensivesComponent;
  let fixture: ComponentFixture<ExpensivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
