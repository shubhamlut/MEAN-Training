import { Component } from '@angular/core';

@Component({
  selector: 'app-twow-way-data-binding-example',
  standalone: false,
  templateUrl: './twow-way-data-binding-example.component.html',
  styleUrl: './twow-way-data-binding-example.component.css'
})
export class TwowWayDataBindingExampleComponent {
countryName:string;
personName:string
constructor(){
  this.countryName ="India"
  this.personName="shubham"
}

inputEventHandler(event:any){

  this.countryName=event.target.value
}
}
