import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.page.html',
  styleUrls: ['./single-product.page.scss'],
})
export class SingleProductPage implements OnInit {
  activeImageIndex: number = 0;
  productImages:any[]=['https://i.imgur.com/KZpuufK.jpg','https://i.imgur.com/GwiUmQA.jpg','https://i.imgur.com/DhKkTrG.jpg','https://i.imgur.com/kYWqL7k.jpg','https://i.imgur.com/c9uUysL.jpg']

  setActiveImage(index: number): void {
    this.activeImageIndex = index;
  }
  productName:any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const productName = params['productName'];
      // Use the product name to fetch and display the product details
      this.productName=productName;
    });
  }

}
