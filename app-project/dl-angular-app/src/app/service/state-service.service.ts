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
  constructor() { 
    this.clickCounter = 0;
    this.clickSecondCounter = 0;
    this.isRed = false;
    this.pageText = "";
    this.apiParams = {
      getProduct: "http://localhost:3500/get-product",
      usersApi: "http://localhost:3500/app-user-work"
    }
  }
}
