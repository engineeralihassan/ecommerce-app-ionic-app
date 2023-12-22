
import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
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

  constructor(private modalController: ModalController) {}

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
