import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalDetailPageComponent } from './rental-detail-page.component';

describe('RentalDetailPageComponent', () => {
  let component: RentalDetailPageComponent;
  let fixture: ComponentFixture<RentalDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentalDetailPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentalDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
