import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage {
  proceedingPaymentOnline:boolean=false;
  constructor() { }

  ngOnInit() {
  }

}
