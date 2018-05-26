import { Directive, HostBinding, Input } from '@angular/core';
import { format } from '../utils/format';

/**
 * Width directives
 */
@Directive({
  selector: '[width]'
})
export class WidthDirective {
  @HostBinding('style.width') _width: string;

  @Input()
  public set width(val: string | number) {
    this._width = format(val);
  }
}

@Directive({
  selector: '[maxWidth]'
})
export class MaxWidthDirective {
  @HostBinding('style.max-width') _maxWidth: string;

  @Input()
  public set maxWidth(val: string | number) {
    this._maxWidth = format(val);
  }
}
@Directive({
  selector: '[minWidth]'
})
export class MinWidthDirective {
  @HostBinding('style.min-width') _minWidth: string;

  @Input()
  public set minWidth(val: string | number) {
    this._minWidth = format(val);
  }
}
