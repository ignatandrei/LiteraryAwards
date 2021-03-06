import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './awards-routing.module';
import { NobelService } from '../../@core/data/nobel.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NbAccordionModule, NbListModule, NbBadgeModule } from '@nebular/theme';
import { BookerService } from '../../@core/data/booker.service';
import { ReadingStatusAuthorComponent } from '../reading-status-author/reading-status-author.component';
import { SharedReadingStatusModule } from '../reading-status-author/SharedReadingStatusModule';

@NgModule({
  imports: [
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
    NgbModule.forRoot(),
    NbAccordionModule,
    NbListModule,
    NbBadgeModule,
    SharedReadingStatusModule
  ],
  declarations: [
    ...routedComponents,
    
  ],
  providers: [
    NobelService,
    BookerService
  ],
})
export class AwardsModule { }


