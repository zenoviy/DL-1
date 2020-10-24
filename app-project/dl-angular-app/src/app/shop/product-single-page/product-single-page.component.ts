import { Component, OnInit, OnDestroy } from '@angular/core';
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
 allProducts: object[];
 selectedPicture: string;
  constructor ( 
    private serverRequestService: ServerRequestService,
    private activeRout: ActivatedRoute,
    private state: StateServiceService
  ) {
    this.allProducts = [];
    this.selectedPicture = "";
   }

  searchProduct(allProduct: object[], id: string){
    return allProduct.find(item => item['id'] == id)
  }
  selectImage(image, event){
    let formatedImage; 
    var regex = new RegExp("^(http|https)://");
    let res = image.match(regex)? image : this.state._HOST + image;

    console.log(image, formatedImage, res)
    if(event){
      event.target.classList.add("selectd-picture")
      console.log(event)
    } 
    this.selectedPicture = res;
  }

  routerEvent(){
    this.navigationSubscribe = this.activeRout.params.subscribe(routerParams => {
      console.log(routerParams)
      this.activeRout.queryParams.subscribe(queryString => {
        console.log(queryString)
        let apiGetProductLink = this.state.apiParams['getProduct'];
        this.serverRequestService.getServiceRequest(apiGetProductLink)
        .subscribe(data => {
          this.allProducts = data.dataBody;
          this.currentPageProduct = this.searchProduct(data.dataBody, queryString.id);
          this.selectImage(this.currentPageProduct['image'][0], null);
        })
      })
    })
  }
  ngOnInit(): void {
    this.routerEvent()
  }
  ngOnDestroy(): void {
    if(this.navigationSubscribe){
      this.navigationSubscribe.unsubscribe();
    }
  }

}
