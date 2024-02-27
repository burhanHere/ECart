import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewArrivalComponent } from './new-arrival.component';

describe('NewArrivalComponent', () => {
  let component: NewArrivalComponent;
  let fixture: ComponentFixture<NewArrivalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewArrivalComponent]
    });
    fixture = TestBed.createComponent(NewArrivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
