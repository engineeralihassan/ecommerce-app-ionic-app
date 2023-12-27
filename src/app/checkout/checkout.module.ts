import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckoutPageRoutingModule } from './checkout-routing.module';

import { CheckoutPage } from './checkout.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  injectStripe,
  StripePaymentElementComponent
} from 'ngx-stripe';
import {
  StripeElementsOptions, 
  StripePaymentElementOptions
} from '@stripe/stripe-js';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CheckoutPageRoutingModule,StripePaymentElementComponent
  ],
  declarations: [CheckoutPage],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class CheckoutPageModule {}
