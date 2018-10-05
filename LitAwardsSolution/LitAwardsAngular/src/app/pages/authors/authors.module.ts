import { NgModule } from '@angular/core';
import { AuthorsComponent } from './authors.component';
import { RouterModule } from '@angular/router';
import { ThemeModule } from '../../@theme/theme.module';
import { ReadingStatusAuthorComponent } from '../reading-status-author/reading-status-author.component';
import { SharedReadingStatusModule } from '../reading-status-author/SharedReadingStatusModule';

@NgModule({
  imports: [
    
    RouterModule,
    ThemeModule,
    SharedReadingStatusModule
  ],
  declarations: [
    AuthorsComponent ,   
    
  ]
})
export class AuthorsModule { }
