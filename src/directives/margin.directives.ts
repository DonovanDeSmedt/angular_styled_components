import { Directive, HostBinding, Input } from '@angular/core';
import { format } from '../utils/format';

/**
 * Margin directives
 */
@Directive({
  selector: '[margin]'
})
export class MarginDirective {
  @HostBinding('style.margin') _margin: string;

  @Input()
  public set margin(val: string | number) {
    this._margin = format(val);
  }
}
@Directive({
  selector: '[marginLeft]'
})
export class MarginLeftDirective {
  @HostBinding('style.margin-left') _marginLeft: string;

  @Input()
  public set marginLeft(val: string | number) {
    this._marginLeft = format(val);
  }
}
@Directive({
  selector: '[marginRight]'
})
export class MarginRightDirective {
  @HostBinding('style.margin-right') _marginRight: string;

  @Input()
  public set marginRight(val: string | number) {
    this._marginRight = format(val);
  }
}
@Directive({
  selector: '[marginTop]'
})
export class MarginTopDirective {
  @HostBinding('style.margin-top') _marginTop: string;

  @Input()
  public set marginTop(val: string | number) {
    this._marginTop = format(val);
  }
}
@Directive({
  selector: '[marginBottom]'
})
export class MarginBottomDirective {
  @HostBinding('style.margin-bottom') _marginBottom: string;

  @Input()
  public set marginBottom(val: string | number) {
    this._marginBottom = format(val);
  }
}
