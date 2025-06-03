import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDisplayComponent } from './productdisplay.component';

describe('ProductdisplayComponent', () => {
  let component: ProductDisplayComponent;
  let fixture: ComponentFixture<ProductDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
