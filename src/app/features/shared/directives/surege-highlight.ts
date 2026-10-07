import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appSuregeHighlight]',
})
export class SuregeHighlight {
  @HostBinding('style.border')
  border = '2px solid transparent';

  @HostBinding('style.transform')
  scale = 'scale(1)';

  @HostBinding('style.transition')
  transition = '0.3s ease';

  @HostListener('mouseenter')
  onMouseEnter() {
    this.border = '2px solid #375f1d';

    this.scale = 'scale(1.05)';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.border = '2px solid transparent';

    this.scale = 'scale(1)';
  }
}
