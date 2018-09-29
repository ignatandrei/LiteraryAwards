import { Component, OnInit } from '@angular/core';
import { BGService } from '../../../@core/data/bg.service';

@Component({
  selector: 'billgates',
  templateUrl: './billgates.component.html',
  styleUrls: ['./billgates.component.scss']
})
export class BillgatesComponent implements OnInit {

  source:any[];
  constructor(public bg:BGService) { 
   
  }

  ngOnInit() {
    this.source=this.bg.getData();
  }

}
