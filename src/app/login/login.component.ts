
import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SocialAuthService } from "@abacritt/angularx-social-login";
import { SocialUser } from "@abacritt/angularx-social-login";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent{

  email: string = '';
  password: string = '';
  isLogin:boolean=true;
  isSignUp:boolean=false;
  user!: SocialUser;
  loggedIn!: boolean;

  constructor(private authService: SocialAuthService,private modalController: ModalController,private router: Router) {}
  ngOnInit(){
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      if(this.user){
        this.modalController.dismiss();
        this.router.navigate(['/home']);
      }
    });
  }

  closeModal() {
    this.modalController.dismiss();
  }
 
  login() {
    this.modalController.dismiss();
  }
  signUp(){
    this.modalController.dismiss();
  }
  toggleForm(){
    this.isLogin=!this.isLogin;
    this.isSignUp=!this.isSignUp;
  }

}
