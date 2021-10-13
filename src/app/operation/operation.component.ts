import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  @Output() opChoice = new EventEmitter<string>();

  operationChoice : string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

  addNumbers(){
    this.operationChoice = "+";
    this.opChoice.emit(this.operationChoice);
  }
  subtractNumbers(){
    this.operationChoice = "-";
    this.opChoice.emit(this.operationChoice);
  }
  multiplyNumbers(){
    this.operationChoice = "*";
    this.opChoice.emit(this.operationChoice);
  }
  divideNumbers(){
    this.operationChoice = "/";
    this.opChoice.emit(this.operationChoice);
  }
}
