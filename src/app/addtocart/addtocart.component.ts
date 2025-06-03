import { Component, EventEmitter, Input, Output, OnChanges, OnInit, SimpleChanges, OnDestroy } from '@angular/core';
import { Products } from '../model/Product';
import { Cart } from '../model/Cart';

@Component({
  standalone:false,
  selector: 'add-to-cart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddToCartComponent implements OnInit, OnChanges, OnDestroy {
  cartObj: Cart | null;
  tempVar: string = "hello";// not a best practice; no default values if we dont initialise
  quantitySelected: number;
  @Input() companyName: string; // normal field to AddToCart component. @Input decorator is going to make it get data from parent
  @Input("selProduct") product: Products | null;
  @Output() sendDataFromAddToCartToPD: EventEmitter<Cart | null>;
  @Output() sendCancelEventFromAddToCartToPD: EventEmitter<void>;

  constructor() {
    console.log("Constructor of Add To cart called");
    this.companyName = "Edforce";
    this.product = null;
    this.quantitySelected = 1;
    this.sendDataFromAddToCartToPD = new EventEmitter<Cart | null>();
    this.sendCancelEventFromAddToCartToPD = new EventEmitter<void>();
    this.cartObj = null;
  }
  ngOnDestroy(): void {
    if (this.cartObj) {
      alert("Items added to the cart with productId " + this.product?.productId);
    }
    else {
      alert("Sorry to see u go !!!!");
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges in Add to cart called");
    console.log("Changes", changes);
    if (changes['product'] && changes['product'].previousValue && changes['product'].currentValue.productId !== changes['product'].previousValue.productId) {
      this.quantitySelected = 1;
    }
    console.log("Selected Product", this.product);// mounting -- ud; product clicked
    // constructor -- product -- null;
    // ngOnInit -- product -- data from the parent
    // when is the data from the parent assigned to the input decorators -- after ngOnChanges; before 
    // Answer : -- data assignment -- ngOnChanges 
  }
  ngOnInit() {
    console.log("ngOnInit of Add To cart called");
    console.log("Selected Product", this.product);
  }

  modifyQuantity(op: string) {
    if (op == "dec") {
      if (this.quantitySelected > 1)
        this.quantitySelected--;
    }
    else {
      if (this.product && (this.quantitySelected < this.product.quantity)) {
        this.quantitySelected++;
      }
    }
  }
  confirmEventHandler() {
    this.cartObj = this.product ? new Cart(this.product.productId, this.product.productName, this.product.imageUrl, this.product.description, this.product.price, this.product.quantity, this.quantitySelected) : null;
    // trigger the event or emit the event
    this.sendDataFromAddToCartToPD.emit(this.cartObj);


  }
  cancelEventHandler() {
    // trigger an event 
    this.sendCancelEventFromAddToCartToPD.emit();

  }


}
