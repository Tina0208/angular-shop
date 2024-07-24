import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  /**
   * 頁面類型(登入頁 OR 登入後頁)
   * @type {'login' | 'home'}
   */
  @Input() pageType: 'login' | 'home' = 'home';

  constructor() {}
}
