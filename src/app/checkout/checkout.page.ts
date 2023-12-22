import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { loadStripe } from '@stripe/stripe-js';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage {
  priceId = "price_1HSxpTFHabj9XRH6DMA8pC7l";
product = {
  title: "Classic Peace Lily",
  subTitle: "Popular House Plant",
  description:
    "Classic Peace Lily is a spathiphyllum floor plant arranged in a bamboo planter with a blue & red ribbom and butterfly pick.",
  price: 18.0,
};
quantity = 1;
stripePromise = loadStripe(environment.stripe_key);
  async checkout() {
       console.log("Checout calls");
    const stripe = await this.stripePromise;
    if(stripe){
      const { error } = await stripe.redirectToCheckout({
        mode: "payment",
        lineItems: [{ price: this.priceId, quantity: this.quantity }],
        successUrl: `${window.location.href}/success`,
        cancelUrl: `${window.location.href}/failure`,
      });
      if (error) {
        console.log(error.message);
      }
    }
 
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
  
  }

}
