import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import {
  injectStripe,
  StripePaymentElementComponent,
} from 'ngx-stripe';
import { StripeElementsOptions, StripePaymentElementOptions } from '@stripe/stripe-js';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage {
  checkoutForm: FormGroup;
  @ViewChild(StripePaymentElementComponent)
  paymentElement!: StripePaymentElementComponent;

  constructor(private fb: FormBuilder,private router:Router, private dataService:CartService,private cartservice:CartService) {
    this.checkoutForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      name: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      postal: ['', Validators.required],
      amount: [this.dataService.totalBill, [Validators.required, Validators.pattern(/\d+/)]],
      saveInfo: [false],
    });
  }
  // ngOnInit() {
  //   // Additional initialization logic if needed
  //   this.paymentElement?.elements?.create('card');
  // }
  // elementsOptions: any = {
  //   locale: 'en',
  //   client: 'sk_test_51OP0x9CTKx631UqNYmlm7iGg3g7whjnX12YceqGkLHcp51l9Sj0diDcN9jsp9hlsM7OB0XXpnWTGPdh2j3p8639l009cej6xuN', // Replace with your own secret key
  //   appearance: {
  //     theme: 'flat',
  //   },
  // };

  // paymentElementOptions: StripePaymentElementOptions = {
  //   layout: {
  //     type: 'tabs',
  //     defaultCollapsed: false,
  //     radios: false,
  //     spacedAccordionItems: false,
  //   },
  // };

  // Replace with your own public key
  // stripe = injectStripe('pk_test_51OP0x9CTKx631UqNEM3yroPnDECbSUPGhoLAS8jztp48Cs62RYfZQHyEeZvQ4AscaeY2MWHFMkDn0WUmgBNx8xCh00Gh8UK6uq');
  // paying = false;

  // pay() {
  //   if (this.paying || this.checkoutForm.invalid) return;
  //   this.paying = true;

  //   const { name, email, address, postal, city } = this.checkoutForm.getRawValue();

  //   const cardElement = this.paymentElement?.elements?.getElement('card');

  //   // Check if cardElement is not null before proceeding
  //   if (!cardElement) {
  //     console.error('Card element is null');
  //     this.paying = false;
  //     return;
  //   }

  //   // Make sure to replace 'your_client_secret' with the actual PaymentIntent client secret
  //   this.stripe
  //     .confirmCardPayment('sk_test_51OP0x9CTKx631UqNYmlm7iGg3g7whjnX12YceqGkLHcp51l9Sj0diDcN9jsp9hlsM7OB0XXpnWTGPdh2j3p8639l009cej6xuN', {
  //       payment_method: {
  //         card: cardElement,
  //         billing_details: {
  //           name: name as string,
  //           email: email as string,
  //           address: {
  //             line1: address as string,
  //             postal_code: postal as string,
  //             city: city as string,
  //           },
  //         },
  //       },
  //       setup_future_usage: 'on_session', // You may adjust this based on your use case
  //       shipping: {
  //         name: name as string,
  //         address: {
  //           line1: address as string,
  //           postal_code: postal as string,
  //           city: city as string,
  //         },
  //       },
  //     })
  //     .subscribe((result: any) => {
  //       this.paying = false;
  //       if (result.error) {
  //         // Show error to your customer (e.g., insufficient funds)
  //         alert({ success: false, error: result.error.message });
  //       } else {
  //         // The payment has been processed!
  //         if (result.paymentIntent?.status === 'succeeded') {
  //           // Show a success message to your customer
  //           alert({ success: true });
  //         }
  //       }
  //     });
  // }
  isSubmitted = false;
  isLoading = false;
  pay() {

    if (this.checkoutForm.valid) {
       this.isLoading=true;
  
      setTimeout(() => {
        this.showSuccessAlert();
      }, 2000);
      this.navigateToHomepage();
    }
  }
  
  showSuccessAlert() {
    this.isSubmitted=true;
    this.isLoading=false;
  }
  
  navigateToHomepage() {
    setTimeout(() => {
      this.router.navigate(['/home']);
      this.isSubmitted=false;
      this.isLoading=false;
      this.checkoutForm.reset();
      this.cartservice.clearCart();
    }, 5000);
    
  }
}
