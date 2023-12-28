import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-favorite-products',
  templateUrl: './favorite-products.page.html',
  styleUrls: ['./favorite-products.page.scss'],
})
export class FavoriteProductsPage implements OnInit {

  favItems: any[] = [];

  constructor(private cartService: CartService) {}


  ngOnInit(): void {
    console.log("itn the constrcutor",);
    this.favItems = this.cartService.getFavItems();
  }


  addToCart(product: any): void {
    this.cartService.addToFav(product);
    this.favItems = this.cartService.getFavItems();
  }

  removeFromFav(index: number): void {
    this.cartService.removeFromFav(index);
    this.favItems = this.cartService.getFavItems();
  }

}
