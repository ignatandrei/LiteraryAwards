import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { NobelService } from '../../@core/data/nobel.service';
import { NbListModule, NbBadgeModule } from '@nebular/theme';
import { BookerService } from '../../@core/data/booker.service';
import { RouterModule } from '@angular/router';
import { BGService } from '../../@core/data/bg.service';
import { AuthorsService } from '../../@core/data/authors.service';


@NgModule({
  imports: [
    ThemeModule,
    NbListModule,
    RouterModule,
    NbBadgeModule
  ],
  declarations: [
    DashboardComponent,
  ],
  providers: [
    NobelService,
    BookerService,
    BGService,
    AuthorsService
    
  ],
})
export class DashboardModule { }
