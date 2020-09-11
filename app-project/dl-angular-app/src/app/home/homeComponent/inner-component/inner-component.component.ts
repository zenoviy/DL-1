import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-inner-component',
  templateUrl: './inner-component.component.html',
  styleUrls: ['./inner-component.component.css']
})
export class InnerComponentComponent implements OnInit {
  helloResponse: string;
  constructor() {
    this.helloResponse = "World";
   }

  @Input() sayHello
  @Output() clickOnButton = new EventEmitter();


  innerClick(){
    console.log(1)
    this.clickOnButton.emit()
  }
  ngOnInit(): void {
  }

}
