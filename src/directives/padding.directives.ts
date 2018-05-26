import { Directive, HostBinding, Input } from '@angular/core';
import { format } from '../utils/format';

/**
 * Padding directives
 */
@Directive({
  selector: '[padding]'
})
export class PaddingDirective {
  @HostBinding('style.padding') _padding: string;

  @Input()
  public set padding(val: string | number) {
    this._padding = format(val);
  }
}
@Directive({
  selector: '[paddingLeft]'
})
export class PaddingLeftDirective {
  @HostBinding('style.padding-left') _paddingLeft: string;

  @Input()
  public set paddingLeft(val: string | number) {
    this._paddingLeft = format(val);
  }
}
@Directive({
  selector: '[paddingRight]'
})
export class PaddingRightDirective {
  @HostBinding('style.padding-right') _paddingRight: string;

  @Input()
  public set paddingRight(val: string | number) {
    this._paddingRight = format(val);
  }
}
@Directive({
  selector: '[paddingTop]'
})
export class PaddingTopDirective {
  @HostBinding('style.padding-top') _paddingTop: string;

  @Input()
  public set paddingTop(val: string | number) {
    this._paddingTop = format(val);
  }
}
@Directive({
  selector: '[paddingBottom]'
})
export class PaddingBottomDirective {
  @HostBinding('style.padding-bottom') _paddingBottom: string;

  @Input()
  public set paddingBottom(val: string | number) {
    this._paddingBottom = format(val);
  }
}
