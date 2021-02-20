import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-itemdetail',
  templateUrl: './itemdetail.component.html',
  styleUrls: ['./itemdetail.component.css']
})
export class ItemdetailComponent implements OnInit {
itemid:number;
  constructor(private _activatedroute:ActivatedRoute) { }

  ngOnInit() {
    this.itemid=parseInt(this._activatedroute.snapshot.paramMap.get('id'));

    
  }

}
