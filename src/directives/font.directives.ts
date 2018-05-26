import { Directive, HostBinding, Input } from '@angular/core';
import { format } from '../utils/format';

/**
 * Font directives
 */
@Directive({
  selector: '[color]'
})
export class ColorDirective {
  @HostBinding('style.color') _color: string;

  @Input()
  public set color(val: string) {
    this._color = val;
  }
}
@Directive({
  selector: '[fontSize]'
})
export class FontSizeDirective {
  @HostBinding('style.font-size') _fontSize: string;

  @Input()
  public set fontSize(val: string | number) {
    this._fontSize = format(val);
  }
}
@Directive({
  selector: '[fontWeight]'
})
export class FontWeightDirective {
  @HostBinding('style.font-weight') _fontWeight: string;

  @Input()
  public set fontWeight(val: string) {
    this._fontWeight = format(val);
  }
}
@Directive({
  selector: '[underline]'
})
export class UnderlineDirective {
  @HostBinding('style.textDecoration') _underline: string;

  @Input()
  public set underline(val: string) {
    this._underline = 'underline';
  }
}
@Directive({
  selector: '[whiteSpace]'
})
export class WhiteSpaceDirective {
  @HostBinding('style.white-space') _whiteSpace: string;

  @Input()
  public set whiteSpace(val: string) {
    this._whiteSpace = val;
  }
}
@Directive({
  selector: '[textOverflow]'
})
export class TextOverflowDirective {
  @HostBinding('style.text-overflow') _textOverflow: string;

  @Input()
  public set textOverflow(val: string) {
    this._textOverflow = val;
  }
}
