import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoriteProductsPage } from './favorite-products.page';

const routes: Routes = [
  {
    path: '',
    component: FavoriteProductsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoriteProductsPageRoutingModule {}
