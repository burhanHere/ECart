import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeacheredBrandCardComponent } from './feachered-brand-card.component';

describe('FeacheredBrandCardComponent', () => {
  let component: FeacheredBrandCardComponent;
  let fixture: ComponentFixture<FeacheredBrandCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeacheredBrandCardComponent]
    });
    fixture = TestBed.createComponent(FeacheredBrandCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
