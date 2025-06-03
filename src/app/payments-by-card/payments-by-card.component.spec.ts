import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsByCardComponent } from './payments-by-card.component';

describe('PaymentsByCardComponent', () => {
  let component: PaymentsByCardComponent;
  let fixture: ComponentFixture<PaymentsByCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentsByCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentsByCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
