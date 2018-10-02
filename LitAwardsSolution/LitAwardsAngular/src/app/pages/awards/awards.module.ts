import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './awards-routing.module';
import { NobelService } from '../../@core/data/nobel.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NbAccordionModule, NbListModule, NbBadgeModule } from '@nebular/theme';
import { BookerService } from '../../@core/data/booker.service';
import { ReadingStatusAuthorComponent } from '../reading-status-author/reading-status-author.component';

@NgModule({
  imports: [
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
    NgbModule.forRoot(),
    NbAccordionModule,
    NbListModule,
    NbBadgeModule
  ],
  declarations: [
    ...routedComponents,
    ReadingStatusAuthorComponent
  ],
  providers: [
    NobelService,
    BookerService
  ],
})
export class AwardsModule { }
