import { Component, OnInit } from '@angular/core';
import { BookerService } from '../../../@core/data/booker.service';

@Component({
  selector: 'booker-all',
  templateUrl: './booker-all.component.html',
  styleUrls: ['./booker-all.component.scss']
})
export class BookerAllComponent {

  constructor(private  service: BookerService) { 

    var self=this;
    this.service.CreateOrGetDb().then(()=>{
      var data= self.service.getData();
      data.map(it=> {
        self.visibleBooks.set(it.name,false);
        self.allBooks.set(it.name,null);
        //this.loadBooks(true,it.name);
      }
        );
      
        self.source = data;
    });

  }

  source: any[];
  allBooks = new Map<string,any[]>();
  visibleBooks= new Map<string,boolean>();

  public changeVisible(it:boolean, name: string){
    this.loadBooks(true,name);
    this.visibleBooks[name] = !this.visibleBooks[name] ;
  }
   public loadBooks(it:boolean, name: string){
     
    
      if(this.allBooks.has(name) && this.allBooks[name] != null)
      {
        return ;
      }
      ;
     var books=  this.service.callByName(name);      
     this.allBooks[name]=books;
     
     
  }
  

}
