import { Component, OnInit } from '@angular/core';
import { BookerService } from '../../../@core/data/booker.service';

@Component({
  selector: 'booker-all',
  templateUrl: './booker-all.component.html',
  styleUrls: ['./booker-all.component.scss']
})
export class BookerAllComponent implements OnInit {

  constructor(private  booker: BookerService) { }
  nr=0;
  ngOnInit() {
    this.nr = this.booker.numberBookerAuthors();
  }

}
