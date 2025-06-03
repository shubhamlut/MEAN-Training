import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsByWalletComponent } from './payments-by-wallet.component';

describe('PaymentsByWalletComponent', () => {
  let component: PaymentsByWalletComponent;
  let fixture: ComponentFixture<PaymentsByWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentsByWalletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentsByWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
