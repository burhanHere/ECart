import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedBrandCardComponent } from './featured-brand-card.component';

describe('FeaturedBrandCardComponent', () => {
  let component: FeaturedBrandCardComponent;
  let fixture: ComponentFixture<FeaturedBrandCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturedBrandCardComponent]
    });
    fixture = TestBed.createComponent(FeaturedBrandCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
