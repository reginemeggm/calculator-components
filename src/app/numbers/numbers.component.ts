import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userInput1 = "";
  userInput2 = "";

  @Output() sendValue1 = new EventEmitter<string>();
  @Output() sendValue2 = new EventEmitter<string>();


  sendUserInput1(){
    this.sendValue1.emit(this.userInput1);
  }
  sendUserInput2(){
    this.sendValue2.emit(this.userInput2);  
  }


}
