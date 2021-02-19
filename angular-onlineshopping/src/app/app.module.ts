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

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    PagenotfoundComponent,
    ItemCategoryComponent,
    SearchComponentComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
