import { Component, OnInit } from '@angular/core';
import { BGService } from '../../../@core/data/bg.service';
import { AuthorsService } from '../../../@core/data/authors.service';

@Component({
  selector: 'billgates',
  templateUrl: './billgates.component.html',
  styleUrls: ['./billgates.component.scss']
})
export class BillgatesComponent implements OnInit {

  source:any[];
  constructor(private bg:BGService,private authors: AuthorsService) { 
   
  }

  ngOnInit() {
    var data= this.bg.getData();
    var ids=this.authors.AllRead();
    this.source=data.map(function(a) { a['read']= true; return a; } );
    
  }
 
  changeRead(val){
    window.alert(JSON.stringify(val);
  }

}
