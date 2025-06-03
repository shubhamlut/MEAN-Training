import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsByUPIComponent } from './payments-by-upi.component';

describe('PaymentsByUPIComponent', () => {
  let component: PaymentsByUPIComponent;
  let fixture: ComponentFixture<PaymentsByUPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentsByUPIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentsByUPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
