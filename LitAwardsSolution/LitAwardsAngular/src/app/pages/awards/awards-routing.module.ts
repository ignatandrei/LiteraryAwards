import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AwardsComponent } from "./awards.component";
import { NobelTableComponent } from "./nobel/nobelAll.component";
import { BookerAllComponent } from "./booker/booker-all.component";
import { BillgatesComponent } from "./billgates/billgates.component";
import { ReadingStatusAuthorComponent } from "../reading-status-author/reading-status-author.component";
import { ignatandreiComponent } from "./ignatandrei/ignatandrei.component";
import { petersonComponent } from "./peterson/peterson.component";

const routes: Routes = [
  {
    path: "",
    component: AwardsComponent,
    children: [
      {
        path: "nobel",
        component: NobelTableComponent
      },
      {
        path: "bg",
        component: BillgatesComponent
      },
      {
        path: "booker",
        component: BookerAllComponent
      },
      {
        path: "iaf",
        component: ignatandreiComponent
      },
      {
        path: "jbp",
        component: petersonComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule {}

export const routedComponents = [
  AwardsComponent,
  NobelTableComponent,
  BookerAllComponent,
  BillgatesComponent,
  ignatandreiComponent,
  petersonComponent
];
