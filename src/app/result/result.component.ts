import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input() userInput1 : any = "";
  @Input() userInput2 : any = ""; 
  @Input() operatorChoice  : any = "";
  result !:number ;

  constructor() { }

  ngOnInit(): void {

  }

  performOperation(){
    if (this.operatorChoice === "+")
     this.result = this.userInput1 + this.userInput2;
     else if (this.operatorChoice === "-")
     this.result = this.userInput1 - this.userInput2;
     else if (this.operatorChoice === "*")
     this.result = this.userInput1 * this.userInput2;
     else if (this.operatorChoice === "/")
     this.result = this.userInput1 / this.userInput2;
 }
  


}
