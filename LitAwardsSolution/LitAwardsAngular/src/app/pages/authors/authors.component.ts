import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnDestroy ,OnInit {
  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }

  private alive = true;
  constructor() { }

  ngOnInit() {
    this.alive=false;
  }

}
