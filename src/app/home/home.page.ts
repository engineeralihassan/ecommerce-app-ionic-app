import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { LoadingController } from '@ionic/angular';
import { CartService } from '../services/cart.service';
// Import necessary modules
import { ToastController } from '@ionic/angular';

declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  query: any = {"business_id":76, "platform":"app", "super_category_id":"1413"}; 
  isLoading!: boolean;
  data:any;
  items:any[]=[];
  activeChipIndex = 1;
  constructor(private toastController: ToastController,private apiService: DataService,private renderer: Renderer2, private loadingController: LoadingController,private cartService: CartService ) {}

  ngOnInit() {
    this.search();

  }
  updateProd(product:any){
    this.cartService.updateProduct(product);
  }
  async presentToast(message: string, duration: number = 300, position: 'top' | 'bottom' | 'middle' = 'bottom') {
    const toast = await this.toastController.create({
      message: message,
      duration: duration,
      position: position,
      color: 'success', 
    });
  
    toast.present();
  }
  setActiveChip(index: number,element:any) {
    this.activeChipIndex = index;
    console.log("element::",element)
    this.query={"business_id":76, "platform":"app", "super_category_id":element.id}; 
    this.search();
  }
  async search(): Promise<void> {
    const loading = await this.loadingController.create({
      message: 'Loading...',
    });

    try {
      await loading.present();
      this.apiService.searchData(this.query).subscribe((results) => {
        console.log("The data is", results);
        this.data=results;
        // Clear the existing items array before updating
  this.items = [];

  results.categories.forEach((element: any) => {
    if (element.items.length) {
      // Use a new array instead of spreading the existing array
      this.items = [...this.items, ...element.items];
    }
  });
        console.log("The Items are::",this.items);
      },
      (error:any) => {
        console.error('Error fetching data:', error);
      })
      .add(() => {
        loading.dismiss();
        this.isLoading = false;
      });
    } catch (error) {
      console.error('Error displaying loading:', error);
    }
  }

  addToCart(product:any){
   console.log("Product is:",product);
   if(product){
    this.cartService.addToCart(product);
    this.presentToast('Add to cart succesfully!', 1000, 'middle');
   }
  }

}
