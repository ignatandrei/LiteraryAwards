import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { NobelService } from '../../@core/data/nobel.service';
import { NbListModule } from '@nebular/theme';
import { BookerService } from '../../@core/data/booker.service';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    ThemeModule,
    NbListModule,
    RouterModule
  ],
  declarations: [
    DashboardComponent,
  ],
  providers: [
    NobelService,
    BookerService
    
  ],
})
export class DashboardModule { }
