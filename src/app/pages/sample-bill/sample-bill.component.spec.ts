import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleBillComponent } from './sample-bill.component';

describe('SampleBillComponent', () => {
  let component: SampleBillComponent;
  let fixture: ComponentFixture<SampleBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleBillComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
