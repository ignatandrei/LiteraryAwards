import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Created with ♥ by <b><a href="https://akveo.com" target="_blank">Akveo</a></b> and
     <a href='mailto:ignatandrei@yahoo.com'>Andrei Ignat</a></span>
    <div class="socials">
      <a href="https://github.com/ignatandrei/LiteraryAwards" target="_blank" class="ion ion-social-github"></a>
      <a href="https://facebook.com/ignat.andrei/" target="_blank" class="ion ion-social-facebook"></a>
      <a href="http://twitter.com/ignatandrei" target="_blank" class="ion ion-social-twitter"></a>
      <a href="https://www.linkedin.com/in/ignatandrei/" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
