import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../common/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private baseUrl="http://localhost:8080/api/v1/items";

  getItems(currentcategoryId: number) {
    const searchUrl=`${this.baseUrl}/search/${currentcategoryId}`;
    return this.http.get<Item[]>(searchUrl);
    
  }
 


  constructor(private http:HttpClient) { }
}