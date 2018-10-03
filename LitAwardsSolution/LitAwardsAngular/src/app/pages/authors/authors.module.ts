import { NgModule } from '@angular/core';
import { AuthorsComponent } from './authors.component';
import { RouterModule } from '@angular/router';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  imports: [
    
    RouterModule,
    ThemeModule,
  ],
  declarations: [
    AuthorsComponent
  ]
})
export class AuthorsModule { }
