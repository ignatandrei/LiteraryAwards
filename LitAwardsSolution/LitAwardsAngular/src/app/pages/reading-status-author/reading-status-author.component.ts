import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthorStatus } from './authorStatus';

@Component({
  selector: 'reading-status-author',
  templateUrl: './reading-status-author.component.html',
  styleUrls: ['./reading-status-author.component.scss']
})
export class ReadingStatusAuthorComponent implements OnInit {
  @Input() author: AuthorStatus;
  @Output() onChangeRead = new EventEmitter<AuthorStatus>();
  constructor() { }

  ngOnInit() {
  }
  changeReadData(author:AuthorStatus){
    this.onChangeRead.emit(author);
  }

}
