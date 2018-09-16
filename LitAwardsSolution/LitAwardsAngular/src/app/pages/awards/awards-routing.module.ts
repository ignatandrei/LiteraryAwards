import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AwardsComponent } from './awards.component';
import { NobelTableComponent  } from './nobel/nobelAll.component';
import { BookerAllComponent } from './booker/booker-all.component';

const routes: Routes = [{
  path: '',
  component: AwardsComponent ,
  children: [{
    path: 'nobel',
    component: NobelTableComponent ,
  },{
    path: 'booker',
    component: BookerAllComponent,
  }],
  
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  AwardsComponent ,
  NobelTableComponent ,
  BookerAllComponent
];
