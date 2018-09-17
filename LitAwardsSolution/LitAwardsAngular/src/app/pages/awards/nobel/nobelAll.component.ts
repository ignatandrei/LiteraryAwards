import { Component } from '@angular/core';
import { NobelService } from '../../../@core/data/nobel.service';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './nobelAll.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class NobelTableComponent {

  source: any[];
  allBooks = new Map<string,any[]>();
  visibleBooks= new Map<string,boolean>();
  constructor(private service: NobelService) {
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
