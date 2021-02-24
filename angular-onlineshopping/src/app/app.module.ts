import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { ItemService } from './services/item.service';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ItemCategoryComponent } from './components/item-category/item-category.component';
import { SearchComponentComponent } from './components/search-component/search-component.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { ItemdetailComponent } from './components/itemdetail/itemdetail.component';
import { FormsModule } from '@angular/forms';
import { JwPaginationModule } from 'jw-angular-pagination';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { LoginComponent } from './components/login/login.component';
import { CartService } from './services/cart.service';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartDetailsComponent } from './components/cart-details/cart-details.component'; 

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    PagenotfoundComponent,
    ItemCategoryComponent,
    SearchComponentComponent,
    ContactComponent,
    AboutComponent,
    ItemdetailComponent,
    CartStatusComponent,
    LoginComponent,
    CartDetailsComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwPaginationModule,
    NgxSpinnerModule,
BrowserAnimationsModule    
       
    
  ],
  providers: [ItemService,CartService,NgxSpinnerService],
  bootstrap: [AppComponent],
})
export class AppModule { }
