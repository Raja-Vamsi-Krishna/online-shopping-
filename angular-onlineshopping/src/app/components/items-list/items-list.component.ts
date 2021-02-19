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
currentcategoryId:number;

 items:Item[]
  constructor(private itemservice:ItemService, private _activateroute:ActivatedRoute) { }

  ngOnInit() {
    this._activateroute.paramMap.subscribe(()=> this.getAllItems());
   
  }
  getAllItems(){
    const hasCategoryId:boolean=this._activateroute.snapshot.paramMap.has("id")
    if(hasCategoryId){
      this.currentcategoryId=parseInt(this._activateroute.snapshot.paramMap.get("id"));
    }
    else{
      this.currentcategoryId=4;
    }




this.itemservice.getItems(this.currentcategoryId).subscribe(data=>
  this.items=data
  )

  }

}
