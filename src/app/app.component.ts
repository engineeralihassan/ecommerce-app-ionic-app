import { Component } from '@angular/core';
import { Platform } from '@ionic/angular'; 
import { CartService } from './services/cart.service';
import { Subscription } from 'rxjs';
import { register } from 'swiper/element/bundle';
import { ModalController } from '@ionic/angular';
import { LoginComponent } from './login/login.component';
import { DataService } from './services/data.service';
import { Router, NavigationEnd } from '@angular/router';
DataService


register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  isShopPage: boolean = false;
  cartLength: number = 0;
  private cartLengthSubscription!: Subscription;
  private favLengthSubscription!: Subscription;
  favLength:number=0;


  onInputValueChanged(value: any) {
    this.datService.setInputValue(value.target.value);
  }

  ngOnInit(): void {
    this.updateCartLength();
    this.updateFavtLength();
    this.cartLengthSubscription = this.cartService.getCartLengthObservable().subscribe({
      next: (length) => {
        this.cartLength = length;
      },
    });
    this.favLengthSubscription = this.cartService.getFavLengthObservable().subscribe({
      next: (length) => {
        this.favLength = length;
      },
    });
  }
  ngOnDestroy(): void {
    this.cartLengthSubscription.unsubscribe();
    this.favLengthSubscription.unsubscribe();
  }

  updateCartLength(): void {
    this.cartLength = this.cartService.getCartItems().length;
  }
  updateFavtLength(): void {
    this.favLength = this.cartService.getFavItems().length;
  }

  navigate: any;  
  constructor(  
    private platform: Platform ,private cartService: CartService ,private router: Router , private datService:DataService,private modalController: ModalController
  ) {  
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check if the current route is the shop page
        this.isShopPage = this.router.url.includes('/shop');
      }
    });
  
    this.sideMenu();  
    this.initializeApp();  
  }  
  
  initializeApp() {  
    this.platform.ready().then(() => {  
    });  
  }  
  sideMenu() {  
    this.navigate =  
    [  
      {  
        title : 'Home',  
        url   : '/home',  
        icon  : 'home'  
      },  
      {  
        title : 'Shop',  
        url   : '/shop',  
        icon  : 'basket'  
      },  
      {  
        title : 'checkout',  
        url   : '/checkout',  
        icon  : 'cash-outline'  
      }, 
      {  
        title : 'Contacts',  
        url   : '/contact-us',  
        icon  : 'person'  
      },  
    ];  
  } 



  async openLoginModal() {
    const modal = await this.modalController.create({
      component: LoginComponent ,
    });
    return await modal.present();
  }
}
