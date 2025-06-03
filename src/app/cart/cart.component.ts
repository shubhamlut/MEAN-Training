import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(private router:Router){

  }
  proceedToPaymentEventHandler(){
this.router.navigate(['/payments'])
  }
}
