import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/common/item';
import { Itemcategory } from 'src/app/common/itemcategory';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-itemdetail',
  templateUrl: './itemdetail.component.html',
  styleUrls: ['./itemdetail.component.css']
})
export class ItemdetailComponent implements OnInit {
itemid:number;
category:Itemcategory;
item:Item;
  constructor(private _activatedroute:ActivatedRoute ,private itemservice:ItemService) { }

  ngOnInit() {
    this.itemid=parseInt(this._activatedroute.snapshot.paramMap.get('id'));
    this.itemservice.getCategoryByItemId(this.itemid).subscribe(data=>this.category=data);
    this.itemservice.getItemsById(this.itemid).subscribe(data=>this.item=data);


    
  }

}
