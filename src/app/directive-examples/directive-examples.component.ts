import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-examples',
  standalone: false,
  templateUrl: './directive-examples.component.html',
  styleUrl: './directive-examples.component.css'
})
export class DirectiveExamplesComponent {
  myFavcolor:string
  myBorder:string
constructor() {

  this.myFavcolor ='pink'
  this.myBorder = '2px solid black'
}
}
