import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }

  public message:string="Hello World";
  public someNumber:number=5.2342555;
  public someDate:Date=new Date();
  public someCurrency:number=45.86;
  
 

  ngOnInit(): void {
  }

}
