import { Directive, HostBinding, Input } from '@angular/core';
import { format } from '../utils/format';

/**
 * Extra directives
 */
@Directive({
  selector: '[cursor]'
})
export class CursorDirective {
  @HostBinding('style.cursor') _cursor: string;

  @Input()
  public set cursor(val: string) {
    this._cursor = val;
  }
}
@Directive({
  selector: '[blur]'
})
export class BlurDirective {
  @HostBinding('style.blur') _blur: string;

  @Input()
  public set blur(val: string) {
    this._blur = format(val);
  }
}

@Directive({
  selector: '[opacity]'
})
export class OpacityDirective {
  @HostBinding('style.opacity') _opacity: string;

  @Input()
  public set opacity(val: string) {
    this._opacity = val;
  }
}

@Directive({
  selector: '[transform]'
})
export class TransformDirective {
  @HostBinding('style.transform') _transform: string;

  @Input()
  public set transform(val: string) {
    this._transform = val;
  }
}

/***
 * Not working --> only with DOMSanitizer.bypassSecurityTrustStyle
 * This will override all styles, preventing other style items to be set
 */

// @Directive({
//   selector: '[boxShadow]'
// })
// export class BoxShadowDirective {
//   @HostBinding('style.box-shadow') _boxShadow: string;

//   @Input()
//   public set boxShadow(val: string) {
//     this._boxShadow = val;
//   }
// }
