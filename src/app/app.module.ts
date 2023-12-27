import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { DataViewModule } from 'primeng/dataview';
import { NgxStripeModule } from 'ngx-stripe';



@NgModule({
  declarations: [AppComponent,FooterComponent],
  imports: [BrowserModule, IonicModule.forRoot(),HttpClientModule, AppRoutingModule,DataViewModule,BrowserAnimationsModule , NgxStripeModule.forRoot('pk_test_51OP0x9CTKx631UqNEM3yroPnDECbSUPGhoLAS8jztp48Cs62RYfZQHyEeZvQ4AscaeY2MWHFMkDn0WUmgBNx8xCh00Gh8UK6uq'),],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },],
  bootstrap: [AppComponent],
})
export class AppModule {}
