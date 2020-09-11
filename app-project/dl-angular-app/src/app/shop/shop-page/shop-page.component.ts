import { Component, OnInit } from '@angular/core';
import { ServerRequestService } from '../../service/server-request.service';
import { StateServiceService } from '../../service/state-service.service';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css']
})
export class ShopPageComponent implements OnInit {
  allProduct: object[];
  constructor( private serverRequestService: ServerRequestService, 
    private state: StateServiceService ) { }

  ngOnInit(): void {
    let apiGetProductLink = this.state.apiParams['getProduct'];
    this.serverRequestService.getServiceRequest(apiGetProductLink)
    .subscribe(data => {
      console.log(data)
      this.allProduct = data.dataBody;
    })
  }

}
