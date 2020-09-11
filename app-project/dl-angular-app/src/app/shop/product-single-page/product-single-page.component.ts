import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServerRequestService } from '../../service/server-request.service';
import { StateServiceService } from '../../service/state-service.service';

@Component({
  selector: 'app-product-single-page',
  templateUrl: './product-single-page.component.html',
  styleUrls: ['./product-single-page.component.css']
})
export class ProductSinglePageComponent implements OnInit {
 navigationSubscribe: any;
 currentPageProduct: object;
  constructor( 
    private serverRequestService: ServerRequestService,
    private activeRout: ActivatedRoute,
    private state: StateServiceService
  ) { }

  searchProduct(allProduct: object[], id: string){
    return allProduct.find(item => item['id'] == id)
  }

  routerEvent(){
    this.navigationSubscribe = this.activeRout.params.subscribe(routerParams => {
      console.log(routerParams)
      this.activeRout.queryParams.subscribe(queryString => {
        console.log(queryString)
        let apiGetProductLink = this.state.apiParams['getProduct'];
        this.serverRequestService.getServiceRequest(apiGetProductLink)
        .subscribe(data => {
          this.currentPageProduct = this.searchProduct(data.dataBody, queryString.id);
        })
      })
    })
  }
  ngOnInit(): void {
    this.routerEvent()
  }

}
