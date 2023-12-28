import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { DataService } from '../services/data.service';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage{

  query: any = {"business_id":76, "platform":"app", "super_category_id":"1413"}; 
  isFirstTime:boolean=true;
  inputValue: string = '';
  isLoading:boolean=true;
  data:any;
  items:any[]=[];
  activeChipIndex = 1;
  dataCopy:any[]=[];
  searching:any;
  constructor(private sharedService: DataService,private toastController: ToastController,private apiService: DataService, private loadingController: LoadingController,private cartService: CartService ) {}

  ngOnInit() {
    if(this.isFirstTime){
      this.search();
    }
   
    this.sharedService.inputValue$.subscribe((value) => {
      this.inputValue = value;
      console.log("Updates value",value);
      this.searching=true;
      if(!value){
        if(this.dataCopy.length){
          this.items=this.dataCopy;
          this.searching=false;
        }
        
      }else{
        console.log("inside the else",value);
        this.items = this.dataCopy.filter((item) => item.name.includes(value));
;
        console.log("items searched",this.items)
        this.searching=false;
      }
      this.searching=false;
    });
  }

  async presentToast(message: string, duration: number = 300, position: 'top' | 'bottom' | 'middle' = 'bottom') {
    const toast = await this.toastController.create({
      message: message,
      duration: duration,
      position: position,
      icon:'glob',
      color:'success',
      cssClass: 'custom-toast',
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
      this.dataCopy=this.items;
      this.isFirstTime=false;
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
  addToFav(product:any){
    console.log("Product is:",product);
    if(product){
     this.cartService.addToFav(product);
     this.presentToast('Add to Favroutes succesfully!', 1000, 'middle');
    }
   }

}
