import { Component } from '@angular/core';

@Component({
  selector: 'app-register-template',
  standalone: false,
  templateUrl: './register-template.component.html',
  styleUrl: './register-template.component.css'
})
export class RegisterTemplateComponent {

  constructor() {

  }

  submitEventHandler(registerFormValues: any) {
console.log(registerFormValues)
  }
}
