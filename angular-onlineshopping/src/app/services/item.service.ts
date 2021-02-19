import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../common/item';
import { Itemcategory } from '../common/itemcategory';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private baseUrl="http://localhost:8080/api/v1/items";
  private categoryUrl="http://localhost:8080/api/v1/itemcategories";

  getItems(currentcategoryId: number):Observable<Item[]> {
    const searchUrl=`${this.baseUrl}/search/${currentcategoryId}`;
    return this.http.get<Item[]>(searchUrl);
    
  }
  getItemCategories():Observable<Itemcategory[]> {
   
    return this.http.get<Itemcategory[]>(this.categoryUrl);
    
  }
 


  constructor(private http:HttpClient) { }
}