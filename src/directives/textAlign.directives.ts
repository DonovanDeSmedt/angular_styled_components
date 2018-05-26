import { Directive, HostBinding, Input } from '@angular/core';

/**
 * Text align directives
 */
@Directive({
  selector: '[tac]'
})
export class TextAlignCenterDirective {
  @HostBinding('style.text-align') _tac: string;

  @Input()
  public set tac(val: string) {
    this._tac = 'center';
  }
}

@Directive({
  selector: '[tar]'
})
export class TextAlignRightDirective {
  @HostBinding('style.text-align') _tac: string;

  @Input()
  public set tac(val: string) {
    this._tac = 'right';
  }
}

@Directive({
  selector: '[tal]'
})
export class TextAlignLeftDirective {
  @HostBinding('style.text-align') _tac: string;

  @Input()
  public set tac(val: string) {
    this._tac = 'left';
  }
}
