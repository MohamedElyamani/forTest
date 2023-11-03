import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbareComponent } from './navbare/navbare.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {HttpClientModule} from '@angular/common/http';
import { ServicesComponent } from './services/services.component';
import { FormsModule } from '@angular/forms';
import { SortListPipe } from './sort-list.pipe';
import { MasterComponent } from './master/master.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbareComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    SortListPipe,
    MasterComponent,
    ProductlistComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  }
