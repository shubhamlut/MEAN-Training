import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsByNetbankingComponent } from './payments-by-netbanking.component';

describe('PaymentsByNetbankingComponent', () => {
  let component: PaymentsByNetbankingComponent;
  let fixture: ComponentFixture<PaymentsByNetbankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentsByNetbankingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentsByNetbankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
