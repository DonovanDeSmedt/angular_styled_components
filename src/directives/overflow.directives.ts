import { Directive, HostBinding, Input } from '@angular/core';

/**
 * Overflow directives
 */
@Directive({
  selector: '[overflow]'
})
export class OverflowDirective {
  @HostBinding('style.overflow') _overflow: string;

  @Input()
  public set overflow(val: string) {
    this._overflow = val;
  }
}

@Directive({
  selector: '[overflowX]'
})
export class OverflowXDirective {
  @HostBinding('style.overflow-x') _overflowX: string;

  @Input()
  public set overflowX(val: string) {
    this._overflowX = val;
  }
}
@Directive({
  selector: '[overflowY]'
})
export class OverflowYDirective {
  @HostBinding('style.overflow-y') _overflowY: string;

  @Input()
  public set overflowY(val: string) {
    this._overflowY = val;
  }
}
