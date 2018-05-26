import { Directive, HostBinding, Input } from '@angular/core';
import { format } from '../utils/format';

/**
 * Overflow directives
 */
@Directive({
  selector: '[float]'
})
export class FloatDirective {
  @HostBinding('style.float') _float: string;

  @Input()
  public set float(val: string) {
    this._float = val;
  }
}

@Directive({
  selector: '[position]'
})
export class PositionDirective {
  @HostBinding('style.position') _position: string;

  @Input()
  public set position(val: string) {
    this._position = val;
  }
}
@Directive({
  selector: '[display]'
})
export class DisplayDirective {
  @HostBinding('style.display') _display: string;

  @Input()
  public set display(val: string) {
    this._display = val;
  }
}
@Directive({
  selector: '[zIndex]'
})
export class ZIndexDirective {
  @HostBinding('style.display') _z: string;

  @Input()
  public set zIndex(val: string) {
    this._z = val;
  }
}
@Directive({
  selector: '[left]'
})
export class LeftDirective {
  @HostBinding('style.left') _left: string;

  @Input()
  public set left(val: string | number) {
    this._left = format(val);
  }
}
@Directive({
  selector: '[right]'
})
export class RightDirective {
  @HostBinding('style.right') _right: string;

  @Input()
  public set right(val: string | number) {
    this._right = format(val);
  }
}
@Directive({
  selector: '[top]'
})
export class TopDirective {
  @HostBinding('style.top') _top: string;

  @Input()
  public set top(val: string | number) {
    this._top = format(val);
  }
}
@Directive({
  selector: '[bottom]'
})
export class BottomDirective {
  @HostBinding('style.bottom') _bottom: string;

  @Input()
  public set bottom(val: string | number) {
    this._bottom = format(val);
  }
}
