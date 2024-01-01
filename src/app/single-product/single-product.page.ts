import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.page.html',
  styleUrls: ['./single-product.page.scss'],
})
export class SingleProductPage implements OnInit {
  activeImageIndex: number = 0;
  productImages:any[]=['https://i.imgur.com/KZpuufK.jpg','https://i.imgur.com/GwiUmQA.jpg','https://i.imgur.com/DhKkTrG.jpg','https://i.imgur.com/kYWqL7k.jpg','https://i.imgur.com/c9uUysL.jpg']
   productSingle:any;

  setActiveImage(index: number): void {
    this.activeImageIndex = index;
    console.log("the single item is:",this.cart.productItem);
  }
  productName:any;
  constructor(private route: ActivatedRoute,private cart:CartService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const productName = params['productName'];
      // Use the product name to fetch and display the product details
      this.productName=productName;
    });
    console.log("the single item is:",this.cart.productItem);
   
    this.productSingle=this.cart.productItem;
    if(this.productSingle?.image){
      this.productImages[0]=this.productSingle.image;
    }

  }
  addToCart(product: any,remove=false): void {
    this.cart.addToCart(product,remove);
  }
   addToFav(product:any){
     console.log("Product is:",product);
     if(product){
      this.cart.addToFav(product);
     }
    }
}
