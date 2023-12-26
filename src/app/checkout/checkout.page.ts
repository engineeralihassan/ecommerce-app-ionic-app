import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { loadStripe } from '@stripe/stripe-js';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage {
  checkoutForm: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.checkoutForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      name: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      postal: ['', Validators.required],
      saveInfo: [false]
    });
  }

  get formControls() {
    return this.checkoutForm.controls;
  }

  getErrorMessage(controlName: string) {
    const control = this.checkoutForm.get(controlName);
    if(control){
      if (control.hasError('required')) {
        return 'This field is required';
      } else if (control.hasError('email')) {
        return 'Invalid email address';
      }
    }

    return '';
  }

  checkout() {
    if(!this.checkoutForm.valid){
      alert("please fill out all the required fields")
    }
    console.log("Checkout button clicked!",this.checkoutForm.value);
  }

}
