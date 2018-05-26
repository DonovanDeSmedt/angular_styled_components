import { Directive, HostBinding, Input } from '@angular/core';
import { format } from '../utils/format';

/**
 * Background directives
 */
@Directive({
  selector: '[background]'
})
export class BackgroundDirective {
  @HostBinding('style.background') _background: string;

  @Input()
  public set background(val: string) {
    this._background = val;
  }
}
@Directive({
  selector: '[backgroundColor]'
})
export class BackgroundColorDirective {
  @HostBinding('style.background-color') _backgroundColor: string;

  @Input()
  public set backgroundColor(val: string) {
    this._backgroundColor = val;
  }
}
@Directive({
  selector: '[backgroundSize]'
})
export class BackgroundSizeDirective {
  @HostBinding('style.background-size') _backgroundSize: string;

  @Input()
  public set backgroundSize(val: string) {
    this._backgroundSize = format(val);
  }
}
