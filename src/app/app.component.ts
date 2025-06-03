import { Component,ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone:false,
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation:ViewEncapsulation.Emulated ///this will apply css to the entire application // Emulated- only to that corresponding component
})
export class AppComponent {
  title = 'myFirstProject';
  companyName:string;
  fruits:string[];
  isMember:boolean;
  empObj:Object;
  constructor(){
    this.companyName="Marsh";
    this.fruits=["apple","mango"]
    this.isMember = true;
    this.empObj={empName:'shubham'}
  }
}
