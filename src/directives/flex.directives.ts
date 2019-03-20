import { Directive, HostBinding, ElementRef, Input } from '@angular/core';
import { format } from '../utils/format';

/**
 * Flex direction directives
 */

@Directive({
  selector: '[fdr]'
})
export class FdrDirective {
  @HostBinding('style.display')
  display: string;
  @HostBinding('style.flex-direction')
  fdr: string;

  constructor(el: ElementRef) {
    this.display = 'flex';
    this.fdr = 'row';
  }
}

@Directive({
  selector: '[fdc]'
})
export class FdcDirective {
  @HostBinding('style.display')
  display: string;
  @HostBinding('style.flex-direction')
  fdr: string;

  constructor(el: ElementRef) {
    this.display = 'flex';
    this.fdr = 'column';
  }
}

@Directive({
  selector: '[fdrr]'
})
export class FdrrDirective {
  @HostBinding('style.display')
  display: string;
  @HostBinding('style.flex-direction')
  fdr: string;

  constructor(el: ElementRef) {
    this.display = 'flex';
    this.fdr = 'row-reverse';
  }
}
@Directive({
  selector: '[fdcr]'
})
export class FdcrDirective {
  @HostBinding('style.display')
  display: string;
  @HostBinding('style.flex-direction')
  fdr: string;

  constructor(el: ElementRef) {
    this.display = 'flex';
    this.fdr = 'column-reverse';
  }
}

/**
 * Flex wrap directives
 */
@Directive({
  selector: '[fw]'
})
export class FwDirective {
  @HostBinding('style.flex-wrap')
  fw: string;

  constructor(el: ElementRef) {
    this.fw = 'wrap';
  }
}

@Directive({
  selector: '[fnw]'
})
export class FnwDirective {
  @HostBinding('style.flex-wrap')
  fw: string;

  constructor(el: ElementRef) {
    this.fw = 'nowrap';
  }
}

@Directive({
  selector: '[fwr]'
})
export class FwrwDirective {
  @HostBinding('style.flex-wrap')
  fw: string;

  constructor(el: ElementRef) {
    this.fw = 'wrap-reverse';
  }
}

/***
 * Flex flow directives
 */
@Directive({
  selector: '[fffd]'
})
export class FffdDirective {
  @HostBinding('style.flex-flwo')
  ff: string;

  constructor(el: ElementRef) {
    this.ff = 'flex-direction';
  }
}

@Directive({
  selector: '[fffw]'
})
export class FffwDirective {
  @HostBinding('style.flex-flwo')
  ff: string;

  constructor(el: ElementRef) {
    this.ff = 'flex-wrap';
  }
}

/**
 * Flex basis directives
 */

@Directive({
  selector: '[fb]'
})
export class FbDirective {
  @HostBinding('style.flex-basis')
  _fb = 'auto';

  @Input()
  public set fb(val: string) {
    this._fb = format(val);
  }
}
/***
 * Justify content directives
 */
@Directive({
  selector: '[jcsa]'
})
export class JcsaDirective {
  @HostBinding('style.justify-content')
  jc: string;
  @HostBinding('style.display')
  display: string;

  constructor(el: ElementRef) {
    this.jc = 'space-around';
    this.display = 'flex';
  }
}

@Directive({
  selector: '[jcsb]'
})
export class JcsbDirective {
  @HostBinding('style.justify-content')
  jc: string;
  @HostBinding('style.display')
  display: string;

  constructor(el: ElementRef) {
    this.jc = 'space-between';
    this.display = 'flex';
  }
}
@Directive({
  selector: '[jcc]'
})
export class JccDirective {
  @HostBinding('style.justify-content')
  jc: string;
  @HostBinding('style.display')
  display: string;

  constructor(el: ElementRef) {
    this.jc = 'center';
    this.display = 'flex';
  }
}

@Directive({
  selector: '[jcfe]'
})
export class JcfeDirective {
  @HostBinding('style.justify-content')
  jc: string;
  @HostBinding('style.display')
  display: string;

  constructor(el: ElementRef) {
    this.jc = 'flex-end';
    this.display = 'flex';
  }
}
@Directive({
  selector: '[jcfs]'
})
export class JcfsDirective {
  @HostBinding('style.justify-content')
  jc: string;
  @HostBinding('style.display')
  display: string;

  constructor(el: ElementRef) {
    this.jc = 'flex-start';
    this.display = 'flex';
  }
}
@Directive({
  selector: '[jcse]'
})
export class JcseDirective {
  @HostBinding('style.justify-content')
  jc: string;
  @HostBinding('style.display')
  display: string;

  constructor(el: ElementRef) {
    this.jc = 'space-evenly';
    this.display = 'flex';
  }
}

/***
 * Align items directives
 */
@Directive({
  selector: '[aib]'
})
export class AibDirective {
  @HostBinding('style.align-items')
  ai: string;

  constructor(el: ElementRef) {
    this.ai = 'baseline';
  }
}
@Directive({
  selector: '[aic]'
})
export class AicDirective {
  @HostBinding('style.align-items')
  ai: string;

  constructor(el: ElementRef) {
    this.ai = 'center';
  }
}
@Directive({
  selector: '[aife]'
})
export class AifeDirective {
  @HostBinding('style.align-items')
  ai: string;

  constructor(el: ElementRef) {
    this.ai = 'flex-end';
  }
}

@Directive({
  selector: '[aifs]'
})
export class AifsDirective {
  @HostBinding('style.align-items')
  ai: string;

  constructor(el: ElementRef) {
    this.ai = 'flex-start';
  }
}

@Directive({
  selector: '[ais]'
})
export class AisDirective {
  @HostBinding('style.align-items')
  ais: string;

  constructor(el: ElementRef) {
    this.ais = 'stretch';
  }
}

@Directive({
  selector: '[asa]'
})
export class AsaDirective {
  @HostBinding('style.align-self')
  asa: string;

  constructor(el: ElementRef) {
    this.asa = 'auto';
  }
}
@Directive({
  selector: '[ass]'
})
export class AssDirective {
  @HostBinding('style.align-self')
  ass: string;

  constructor(el: ElementRef) {
    this.ass = 'strecth';
  }
}

@Directive({
  selector: '[asc]'
})
export class AscDirective {
  @HostBinding('style.align-self')
  asc: string;

  constructor(el: ElementRef) {
    this.asc = 'center';
  }
}

@Directive({
  selector: '[asfs]'
})
export class AsfsDirective {
  @HostBinding('style.align-self')
  asfs: string;

  constructor(el: ElementRef) {
    this.asfs = 'flex-start';
  }
}

@Directive({
  selector: '[asfe]'
})
export class AsfeDirective {
  @HostBinding('style.align-self')
  asfe: string;

  constructor(el: ElementRef) {
    this.asfe = 'flex-end';
  }
}
@Directive({
  selector: '[asfb]'
})
export class AsfbDirective {
  @HostBinding('style.align-self')
  asfb: string;

  constructor(el: ElementRef) {
    this.asfb = 'baseline';
  }
}
@Directive({
  selector: '[asi]'
})
export class AsiDirective {
  @HostBinding('style.align-self')
  asi: string;

  constructor(el: ElementRef) {
    this.asi = 'intial';
  }
}

/**
 * General flex directives
 */
@Directive({
  selector: '[flexShort]'
})
export class FlexShortDirective {
  @HostBinding('style.flex-short')
  _flex: string;
  @Input()
  public set flexShort(val: string) {
    this._flex = val;
  }
}

@Directive({
  selector: '[flexGrow]'
})
export class FlexGrowDirective {
  @HostBinding('style.flex-grow')
  fg: string;
  @Input()
  public set flexGrow(val: string) {
    this.fg = val;
  }
}

@Directive({
  selector: '[flex]'
})
export class FlexDirective {
  @HostBinding('style.flex')
  fl: string;
  @Input()
  public set flex(val: string) {
    this.fl = val;
  }
}

@Directive({
  selector: '[flexShrink]'
})
export class FlexShrinkDirective {
  @HostBinding('style.flex-shrink')
  fs: string;
  @Input()
  public set flexShrink(val: string) {
    this.fs = val;
  }
}
@Directive({
  selector: '[order]'
})
export class FlexOrderDirective {
  @HostBinding('style.order')
  _order: string;
  @Input()
  public set order(val: string) {
    this._order = val;
  }
}
