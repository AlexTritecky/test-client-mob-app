import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

export const SVG_ICONS: { [key: string]: string } = {
  'icon-arrow': '/assets/icons/arrow.svg',
  'icon-dots': '/assets/icons/dots.svg',
  'icon-percent': '/assets/icons/icon-percent.svg',
  'icon-discount': '/assets/icons/icon-discount.svg',
  'icon-catalog':'/assets/icons/icon-catalog.svg',
  'icon-file':'/assets/icons/icon-file.svg',
  'icon-user-group':'/assets/icons/icon-user-group.svg',
  'icon-dollar':'/assets/icons/icon-dollar.svg',
  'icon-more':'/assets/icons/icon-more.svg',
};

@Injectable({
  providedIn: 'root',
})
export class SvgRegisterService {
  constructor(private readonly iconRegistry: MatIconRegistry, private readonly sanitizer: DomSanitizer) {}

  public registerSvg(): void {
    Object.keys(SVG_ICONS).forEach((key) => {
      this.iconRegistry.addSvgIcon(key, this.sanitizer.bypassSecurityTrustResourceUrl(SVG_ICONS[key]));
    });
  }
}
