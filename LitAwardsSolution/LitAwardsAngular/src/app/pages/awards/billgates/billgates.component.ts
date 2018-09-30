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
  constructor(public bg:BGService, authors: AuthorsService) { 
   
  }

  ngOnInit() {
    this.source=this.bg.getData();
    
  }

  changeRead(val){
    window.alert(JSON.stringify(val);
  }

}
