import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
signupForm=new FormGroup({
  fname:new FormControl('',[Validators.required,Validators.minLength(3)]),
  mname:new FormControl(''),
  lname:new FormControl('',[Validators.required,Validators.minLength(3)]),
  email:new FormControl('',[Validators.required,Validators.email]),
  phone:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
  jobrole:new FormControl('',[Validators.required,Validators.minLength(5)]),
  password:new FormControl('',[Validators.required,Validators.minLength(8)]),
  confirmPassword:new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(8)]),
})
onSubmit() {
  if (this.signupForm.valid) {
    console.log('Signup Data:', this.signupForm.value);
  }
}
}
