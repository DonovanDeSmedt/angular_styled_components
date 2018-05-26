import { Directive, HostBinding, Input } from '@angular/core';
import { format } from '../utils/format';

/**
 * Border color directives
 */
@Directive({
  selector: '[borderColor]'
})
export class BorderColorDirective {
  @HostBinding('style.border-color') _borderColor: string;

  @Input()
  public set borderColor(val: string) {
    this._borderColor = val;
  }
}
@Directive({
  selector: '[borderTopColor]'
})
export class BorderTopColorDirective {
  @HostBinding('style.border-top-color') _borderTopColor: string;

  @Input()
  public set borderTopColor(val: string) {
    this._borderTopColor = val;
  }
}
@Directive({
  selector: '[borderBottomColor]'
})
export class BorderBottomColorDirective {
  @HostBinding('style.border-bottom-color') _borderBottomColor: string;

  @Input()
  public set borderBottomColor(val: string) {
    this._borderBottomColor = val;
  }
}
@Directive({
  selector: '[borderLeftColor]'
})
export class BorderLeftColorDirective {
  @HostBinding('style.border-left-color') _borderLeftColor: string;

  @Input()
  public set borderLeftColor(val: string) {
    this._borderLeftColor = val;
  }
}
@Directive({
  selector: '[borderRightColor]'
})
export class BorderRightColorDirective {
  @HostBinding('style.border-right-color') _borderRightColor: string;

  @Input()
  public set borderRightColor(val: string) {
    this._borderRightColor = val;
  }
}

/**
 * Border width directives
 */
@Directive({
  selector: '[borderWidth]'
})
export class BorderWidthDirective {
  @HostBinding('style.border-width') _borderWidth: string;

  @Input()
  public set borderWidth(val: string | number) {
    this._borderWidth = format(val);
  }
}
@Directive({
  selector: '[borderTopWidth]'
})
export class BorderTopWidthDirective {
  @HostBinding('style.border-top-width') _borderTopWidth: string;

  @Input()
  public set borderTopWidth(val: string | number) {
    this._borderTopWidth = format(val);
  }
}
@Directive({
  selector: '[borderBottomWidth]'
})
export class BorderBottomWidthDirective {
  @HostBinding('style.border-bottom-width') _borderBottomWidth: string;

  @Input()
  public set borderBottomWidth(val: string | number) {
    this._borderBottomWidth = format(val);
  }
}
@Directive({
  selector: '[borderLeftWidth]'
})
export class BorderLeftWidthDirective {
  @HostBinding('style.border-left-width') _borderLeftWidth: string;

  @Input()
  public set borderLeftWidth(val: string | number) {
    this._borderLeftWidth = format(val);
  }
}
@Directive({
  selector: '[borderRigthWidth]'
})
export class BorderRigthWidthDirective {
  @HostBinding('style.border-rigth-width') _borderRigthWidth: string;

  @Input()
  public set borderRigthWidth(val: string | number) {
    this._borderRigthWidth = format(val);
  }
}
/***
 * Border radius props
 */
@Directive({
  selector: '[borderRadius]'
})
export class BorderRadiusDirective {
  @HostBinding('style.border-radius') _borderRadius: string;

  @Input()
  public set borderRadius(val: string | number) {
    this._borderRadius = format(val);
  }
}
@Directive({
  selector: '[borderTopLeftRadius]'
})
export class BorderTopLeftRadiusDirective {
  @HostBinding('style.border-top-left-radius') _borderTopLeft: string;

  @Input()
  public set borderTopLeftRadius(val: string | number) {
    this._borderTopLeft = format(val);
  }
}
@Directive({
  selector: '[borderTopRightRadius]'
})
export class BorderTopRightRadiusDirective {
  @HostBinding('style.border-top-right-radius') _borderTopRight: string;

  @Input()
  public set borderTopRightRadius(val: string | number) {
    this._borderTopRight = format(val);
  }
}
@Directive({
  selector: '[borderBottomLeftRadius]'
})
export class BorderBottomLeftRadiusDirective {
  @HostBinding('style.border-bottom-left-radius') _borderBottomLeft: string;

  @Input()
  public set borderBottomLeftRadius(val: string | number) {
    this._borderBottomLeft = format(val);
  }
}
@Directive({
  selector: '[borderBottomRightRadius]'
})
export class BorderBottomRightRadiusDirective {
  @HostBinding('style.border-bottom-right-radius') _borderBottomRight: string;

  @Input()
  public set borderBottomRightRadius(val: string | number) {
    this._borderBottomRight = format(val);
  }
}
