import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NbListModule, NbBadgeModule } from '@nebular/theme/';
import { AwardsModule } from './awards/awards.module';
import { AuthorsModule } from './authors/authors.module';
import { ReadingStatusAuthorComponent } from './reading-status-author/reading-status-author.component';
import { SharedReadingStatusModule } from './reading-status-author/SharedReadingStatusModule';


const PAGES_COMPONENTS = [
  PagesComponent,
  
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    AwardsModule,
    AuthorsModule,
    MiscellaneousModule,
    NgbModule.forRoot(),
    NbListModule,    
    NbBadgeModule,
    SharedReadingStatusModule
  ],
  
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
