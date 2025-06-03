import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowWayDataBindingExampleComponent } from './twow-way-data-binding-example.component';

describe('TwowWayDataBindingExampleComponent', () => {
  let component: TwowWayDataBindingExampleComponent;
  let fixture: ComponentFixture<TwowWayDataBindingExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TwowWayDataBindingExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwowWayDataBindingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
