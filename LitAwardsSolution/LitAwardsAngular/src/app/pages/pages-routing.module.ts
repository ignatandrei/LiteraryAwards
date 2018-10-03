import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthorsComponent } from './authors/authors.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path:'authors',
      component: AuthorsComponent
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    }, {
      path: 'awards',
      loadChildren: './awards/awards.module#AwardsModule',
    },
  ],
  
}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
