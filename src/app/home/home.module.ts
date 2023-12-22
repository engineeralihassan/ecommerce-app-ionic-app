import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { TestimonialCarouselComponent } from '../testimonial-carousel/testimonial-carousel.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LoginComponent } from '../login/login.component';







@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, TestimonialCarouselComponent ,LoginComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule {}
