import { Component } from '@angular/core';

@Component({
  standalone:false,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showCart: boolean;
  constructor() {
    this.showCart = false;
  }

  showElement(componentName: string) {
    if (componentName == 'cart') {
      this.showCart = true;
    }
    else {
      this.showCart = false;

    }
  }
}
