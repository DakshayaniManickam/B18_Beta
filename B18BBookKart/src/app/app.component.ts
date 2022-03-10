import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'B18BBookKart';
  constructor(public translate: TranslateService ) {
    translate.addLangs(['en', 'fr', 'nl']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(true ? "browserLang" : 'en');
   }
}
