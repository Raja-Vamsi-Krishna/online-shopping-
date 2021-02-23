import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/common/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-grid.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  currentcategoryId: number;
  searchMode: boolean;
  /* pageOfItems:Array<Item>;
  pageSize:number=6; */

  items:Item[]
  constructor(private itemservice: ItemService, private _activateroute: ActivatedRoute) { }

  ngOnInit() {
    this._activateroute.paramMap.subscribe(() => this.getAllItems());

  }
  /* pageClick(pageOfItems:Array<Item>){
    this.pageOfItems=pageOfItems;
  } */
  getAllItems() {
    this.searchMode = this._activateroute.snapshot.paramMap.has('keyword');
    if (this.searchMode) {
      this.handleSearchItems();
    }
    else {
      this.handleListItems();
    }

  }
  handleListItems() {
    const hasCategoryId: boolean = this._activateroute.snapshot.paramMap.has("id")
    if (hasCategoryId) {
      this.currentcategoryId = parseInt(this._activateroute.snapshot.paramMap.get("id"));
    }
    else {
      this.itemservice.getAllItems().subscribe(data =>
        this.items = data)
      }
    this.itemservice.getItems(this.currentcategoryId).subscribe(data =>
      this.items = data)

  }
  handleSearchItems() {
   const keyword:string= this._activateroute.snapshot.paramMap.get('keyword');
   this.itemservice.getItemsBySearch(keyword).subscribe(data=> this.items=data)

  }

}
