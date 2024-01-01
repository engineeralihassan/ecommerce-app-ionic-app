import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  cartItems: any[] = [];
  totalBill: number = 0;

  constructor(private cartService: CartService) {}


  ngOnInit(): void {
    console.log("itn the constrcutor",);
    this.cartItems = this.cartService.getCartItems();
    this.updateTotalBill();
  }

  updateTotalBill(){
    console.log("items in bill",this.cartItems);
    this.totalBill = this.cartItems.reduce((total, item) => {
      console.log("total bil 1 iteration:",total + (item.price * (+item.quantity)));
      return total + (item.price * (+item.quantity));
    }, 0);
    this.cartService.totalBill=this.totalBill.toFixed(2)+5.00;
    return this.totalBill.toFixed(2)+5.00;
  }

  addToCart(product: any,remove=false): void {
    this.cartService.addToCart(product,remove);
    this.cartItems = this.cartService.getCartItems();
    this.updateTotalBill();
  }

  removeFromCart(index: number): void {
    this.cartService.removeFromCart(index);
    this.cartItems = this.cartService.getCartItems();
    this.updateTotalBill();
  }



  toggleDescriptionInput(index: number): void {
    this.cartItems[index].showDescriptionInput = !this.cartItems[index].showDescriptionInput;
}

submitDescription(index: number): void {
    // You can save the description to your backend or handle it as needed
    console.log(`Product ${this.cartItems[index].name} description: ${this.cartItems[index].description}`);
    this.cartItems[index].showDescriptionInput = false;
}

}
