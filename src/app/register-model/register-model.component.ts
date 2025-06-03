import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-register-model',
  standalone: false,
  templateUrl: './register-model.component.html',
  styleUrls: ['./register-model.component.css']
})
export class RegisterModelComponent {
   
  emailId: FormControl;
  password: FormControl;
  registerModelFormGroup: FormGroup;
  constructor() {
    this.emailId = new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$")]);
    this.password = new FormControl("", [Validators.required, Validators.minLength(8), Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$")])
    this.registerModelFormGroup = new FormGroup({
      emailId: this.emailId,
      password: this.password
    });
  }
 
}