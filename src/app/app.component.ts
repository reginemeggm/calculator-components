import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator-components';
  userInput1 = "";
  userInput2 = "";
  operationChoice = "";


  receiveUserInput1($event :any){
    this.userInput1 = $event;}

  receiveUserInput2($event :any){
    this.userInput2 = $event;}

  
  receiveAdd($event : any){
    this.operationChoice = $event;}

  receiveSubtract($event : any){
    this.operationChoice = $event;}

  receiveMultiply($event : any){
    this.operationChoice = $event;}

  receiveDivide($event : any){
    this.operationChoice = $event;}


}
