import { Directive, HostBinding, Input } from '@angular/core';
import { format } from '../utils/format';

/**
 * Height directives
 */
@Directive({
  selector: '[height]'
})
export class HeightDirective {
  @HostBinding('style.height') _height: string;

  @Input()
  public set height(val: string | number) {
    this._height = format(val);
  }
}

@Directive({
  selector: '[maxHeight]'
})
export class MaxHeightDirective {
  @HostBinding('style.max-height') _maxHeight: string;

  @Input()
  public set maxHeight(val: string | number) {
    this._maxHeight = format(val);
  }
}
@Directive({
  selector: '[minHeight]'
})
export class MinHeightDirective {
  @HostBinding('style.min-height') _minHeight: string;

  @Input()
  public set minHeight(val: string | number) {
    this._minHeight = format(val);
  }
}
