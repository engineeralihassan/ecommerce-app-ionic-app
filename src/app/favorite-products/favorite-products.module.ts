import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoriteProductsPageRoutingModule } from './favorite-products-routing.module';

import { FavoriteProductsPage } from './favorite-products.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoriteProductsPageRoutingModule
  ],
  declarations: [FavoriteProductsPage]
})
export class FavoriteProductsPageModule {}
