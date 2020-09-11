import { Component, OnInit } from '@angular/core';
import { StateServiceService } from '../../service/state-service.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  clickCounter: number;
  clickSecondCounter: number;
  isRed: boolean;
  pageText: string;

  helloText: string;
  constructor( private state: StateServiceService ) { 
    this.clickSecondCounter = state.clickSecondCounter;
    this.pageText = state.pageText;
    this.isRed = this.state.isRed;
    this.helloText = "Hello ";
  }

  clickOnButton(): void{
    this.state.clickCounter += 1;
    this.clickCounter = this.state.clickCounter;
  }


  increaseCount(){
    this.state.clickSecondCounter += 1;
    this.clickSecondCounter = this.state.clickSecondCounter;
  }
  decreseCount(){
    this.state.clickSecondCounter -= 1;
    this.clickSecondCounter = this.state.clickSecondCounter;
  }

  changeBoxEvent(event: any){
    console.log(event.target.checked)
    this.state.isRed = event.target.checked
  }
  changePageText(event: object): void {
    console.log(event['target'].value)
    this.state.pageText = event['target'].value;
  }

  ngOnInit(): void {
    this.clickCounter = this.state.clickCounter;
    //this.isRed = this.state.isRed;
    //this.clickSecondCounter = this.state.clickSecondCounter;
  }

}
