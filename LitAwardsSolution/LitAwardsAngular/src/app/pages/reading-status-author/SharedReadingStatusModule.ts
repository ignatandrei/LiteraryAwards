import { NgModule } from '@angular/core';
import { ReadingStatusAuthorComponent } from './reading-status-author.component';
import { NbBadgeModule } from '@nebular/theme';

@NgModule({
    imports:[NbBadgeModule]
  declarations: [ReadingStatusAuthorComponent],
  exports: [ReadingStatusAuthorComponent]
})
export class SharedReadingStatusModule {
}