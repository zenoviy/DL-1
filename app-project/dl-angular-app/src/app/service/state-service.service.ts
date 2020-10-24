import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateServiceService {
  clickCounter: number;
  clickSecondCounter: number;
  isRed: boolean;
  pageText: string;
  apiParams: object;
  _HOST: string;
  constructor() { 
    this.clickCounter = 0;
    this.clickSecondCounter = 0;
    this.isRed = false;
    this.pageText = "";
    this._HOST = "http://localhost:3500";
    this.apiParams = {
      getProduct: this["_HOST"] + "/get-product",
      usersApi: this["_HOST"] + "/app-user-work"
    }
  }
}
