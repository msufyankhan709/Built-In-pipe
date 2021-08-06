import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-project2';

  public currentPage:number=0;
  public pageLength:number=3;

  public get startPerson():number{
    return this.currentPage*this.pageLength;
  }
  public get endPerson():number{
    return (this.currentPage+1)*this.pageLength;
  }

  public people:any[]=[
    {fn:"Sufyan",ln:"Khan"},
    {fn:"Awais",ln:"Khan"},
    {fn:"Numan",ln:"Khan"},
    {fn:"Zeeshan",ln:"Khan"},
    {fn:"Salman",ln:"Khan"},
    {fn:"Babar",ln:"Khan"},
    {fn:"Aleem",ln:"Khan"},
  ]

  prevPage(){ 
    if(this.currentPage>0){
      this.currentPage--;
    }
  }
  public nextPage(){
    let pages=this.people.length/this.pageLength;

    if(this.people.length/this.pageLength>0){
      pages++;
    }
    if(this.currentPage<this.people.length/this.pageLength){
      this.currentPage++;
    }
  }
}
