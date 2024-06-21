import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { Icons } from '../model/type/icon';

const icons = Icons;

@Injectable({
  providedIn: 'root'
})
export class IconLoaderService {
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) { }

  init(baseUrl: string = '/assets/icon/') {
    for (const key in icons) {
      const iconName = icons[key as keyof typeof Icons];
      this.iconRegistry.addSvgIcon(
        iconName,
        this.sanitizer.bypassSecurityTrustResourceUrl(`${baseUrl + iconName}.svg`)
      );
    }
  }
}
