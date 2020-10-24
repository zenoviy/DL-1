import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shop-side-panel',
  templateUrl: './shop-side-panel.component.html',
  styleUrls: ['./shop-side-panel.component.css']
})
export class ShopSidePanelComponent implements OnInit {

  constructor() { }


  @Input() allProducts: object[]; 
  @Input() currentItem: object;
  @Input() host: string;
  ngOnInit(): void {
  }



}
