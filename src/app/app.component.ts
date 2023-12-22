import { Component } from '@angular/core';
import { Platform } from '@ionic/angular'; 
import { CartService } from './services/cart.service';
import { Subscription } from 'rxjs';
import { register } from 'swiper/element/bundle';
import { ModalController } from '@ionic/angular';
import { LoginComponent } from './login/login.component';


register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  cartLength: number = 0;private cartLengthSubscription!: Subscription;



  ngOnInit(): void {
    this.updateCartLength();
    this.cartLengthSubscription = this.cartService.getCartLengthObservable().subscribe({
      next: (length) => {
        this.cartLength = length;
      },
    });
  }
  ngOnDestroy(): void {
    this.cartLengthSubscription.unsubscribe();
  }

  updateCartLength(): void {
    this.cartLength = this.cartService.getCartItems().length;
  }

  navigate: any;  
  constructor(  
    private platform: Platform ,private cartService: CartService ,private modalController: ModalController
  ) {  
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
