import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

export const SVG_ICONS: { [key: string]: string } = {
  'icon-arrow': '/assets/icons/arrow.svg',
  'icon-dots': '/assets/icons/dots.svg',
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
