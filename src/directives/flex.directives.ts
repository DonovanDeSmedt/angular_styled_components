import { Directive, HostBinding, ElementRef, Input } from '@angular/core';
import { format } from '../utils/format';

/**
 * Flex direction directives
 */

@Directive({
  selector: '[fdr]'
})
export class FdrDirective {
  @HostBinding('style.display') display: string;
  @HostBinding('style.flex-direction') fdr: string;

  constructor(el: ElementRef) {
    this.display = 'flex';
    this.fdr = 'row';
  }
}

@Directive({
  selector: '[fdc]'
})
export class FdcDirective {
  @HostBinding('style.display') display: string;
  @HostBinding('style.flex-direction') fdr: string;

  constructor(el: ElementRef) {
    this.display = 'flex';
    this.fdr = 'column';
  }
}

@Directive({
  selector: '[fdrr]'
})
export class FdrrDirective {
  @HostBinding('style.display') display: string;
  @HostBinding('style.flex-direction') fdr: string;

  constructor(el: ElementRef) {
    this.display = 'flex';
    this.fdr = 'row-reverse';
  }
}
@Directive({
  selector: '[fdcr]'
})
export class FdcrDirective {
  @HostBinding('style.display') display: string;
  @HostBinding('style.flex-direction') fdr: string;

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
  @HostBinding('style.flex-wrap') fw: string;

  constructor(el: ElementRef) {
    this.fw = 'wrap';
  }
}

@Directive({
  selector: '[fnw]'
})
export class FnwDirective {
  @HostBinding('style.flex-wrap') fw: string;

  constructor(el: ElementRef) {
    this.fw = 'nowrap';
  }
}

@Directive({
  selector: '[fwr]'
})
export class FwrwDirective {
  @HostBinding('style.flex-wrap') fw: string;

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
  @HostBinding('style.flex-flwo') ff: string;

  constructor(el: ElementRef) {
    this.ff = 'flex-direction';
  }
}

@Directive({
  selector: '[fffw]'
})
export class FffwDirective {
  @HostBinding('style.flex-flwo') ff: string;

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
  @HostBinding('style.flex-basis') fb: string;

  constructor(el: ElementRef) {
    this.fb = 'auto';
  }
}
/***
 * Justify content directives
 */
@Directive({
  selector: '[jcsa]'
})
export class JcsaDirective {
  @HostBinding('style.justify-content') jc: string;

  constructor(el: ElementRef) {
    this.jc = 'space-around';
  }
}

@Directive({
  selector: '[jcsb]'
})
export class JcsbDirective {
  @HostBinding('style.justify-content') jc: string;

  constructor(el: ElementRef) {
    this.jc = 'space-between';
  }
}
@Directive({
  selector: '[jcc]'
})
export class JccDirective {
  @HostBinding('style.justify-content') jc: string;

  constructor(el: ElementRef) {
    this.jc = 'center';
  }
}

@Directive({
  selector: '[jcfe]'
})
export class JcfeDirective {
  @HostBinding('style.justify-content') jc: string;

  constructor(el: ElementRef) {
    this.jc = 'flex-end';
  }
}
@Directive({
  selector: '[jcfs]'
})
export class JcfsDirective {
  @HostBinding('style.justify-content') jc: string;

  constructor(el: ElementRef) {
    this.jc = 'flex-start';
  }
}
@Directive({
  selector: '[jcse]'
})
export class JcseDirective {
  @HostBinding('style.justify-content') jc: string;

  constructor(el: ElementRef) {
    this.jc = 'space-evenly';
  }
}

/***
 * Align items directives
 */
@Directive({
  selector: '[aib]'
})
export class AibDirective {
  @HostBinding('style.align-items') ai: string;

  constructor(el: ElementRef) {
    this.ai = 'baseline';
  }
}
@Directive({
  selector: '[aic]'
})
export class AicDirective {
  @HostBinding('style.align-items') ai: string;

  constructor(el: ElementRef) {
    this.ai = 'center';
  }
}
@Directive({
  selector: '[aife]'
})
export class AifeDirective {
  @HostBinding('style.align-items') ai: string;

  constructor(el: ElementRef) {
    this.ai = 'flex-end';
  }
}

@Directive({
  selector: '[aifs]'
})
export class AifsDirective {
  @HostBinding('style.align-items') ai: string;

  constructor(el: ElementRef) {
    this.ai = 'flex-start';
  }
}

@Directive({
  selector: '[ais]'
})
export class AisDirective {
  @HostBinding('style.align-items') ai: string;

  constructor(el: ElementRef) {
    this.ai = 'stretch';
  }
}

/**
 * General flex directives
/**
 * Flex direction directives
 */

@Directive({
  selector: '[fdr]'
})
export class FdrDirective {
  @HostBinding('style.display') display: string;
  @HostBinding('style.flex-direction') fdr: string;

  constructor(el: ElementRef) {
    this.display = 'flex';
    this.fdr = 'row';
  }
}

@Directive({
  selector: '[fdc]'
})
export class FdcDirective {
  @HostBinding('style.display') display: string;
  @HostBinding('style.flex-direction') fdr: string;

  constructor(el: ElementRef) {
    this.display = 'flex';
    this.fdr = 'column';
  }
}

@Directive({
  selector: '[fdrr]'
})
export class FdrrDirective {
  @HostBinding('style.display') display: string;
  @HostBinding('style.flex-direction') fdr: string;

  constructor(el: ElementRef) {
    this.display = 'flex';
    this.fdr = 'row-reverse';
  }
}
@Directive({
  selector: '[fdcr]'
})
export class FdcrDirective {
  @HostBinding('style.display') display: string;
  @HostBinding('style.flex-direction') fdr: string;

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
  @HostBinding('style.flex-wrap') fw: string;

  constructor(el: ElementRef) {
    this.fw = 'wrap';
  }
}

@Directive({
  selector: '[fnw]'
})
export class FnwDirective {
  @HostBinding('style.flex-wrap') fw: string;

  constructor(el: ElementRef) {
    this.fw = 'nowrap';
  }
}

@Directive({
  selector: '[fwr]'
})
export class FwrwDirective {
  @HostBinding('style.flex-wrap') fw: string;

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
  @HostBinding('style.flex-flwo') ff: string;

  constructor(el: ElementRef) {
    this.ff = 'flex-direction';
  }
}

@Directive({
  selector: '[fffw]'
})
export class FffwDirective {
  @HostBinding('style.flex-flwo') ff: string;

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
  @HostBinding('style.flex-basis') fb: string;

  constructor(el: ElementRef) {
    this.fb = 'auto';
  }
}
/***
 * Justify content directives
 */
@Directive({
  selector: '[jcsa]'
})
export class JcsaDirective {
  @HostBinding('style.justify-content') jc: string;

  constructor(el: ElementRef) {
    this.jc = 'space-around';
  }
}

@Directive({
  selector: '[jcsb]'
})
export class JcsbDirective {
  @HostBinding('style.justify-content') jc: string;

  constructor(el: ElementRef) {
    this.jc = 'space-between';
  }
}
@Directive({
  selector: '[jcc]'
})
export class JccDirective {
  @HostBinding('style.justify-content') jc: string;

  constructor(el: ElementRef) {
    this.jc = 'center';
  }
}

@Directive({
  selector: '[jcfe]'
})
export class JcfeDirective {
  @HostBinding('style.justify-content') jc: string;

  constructor(el: ElementRef) {
    this.jc = 'flex-end';
  }
}
@Directive({
  selector: '[jcfs]'
})
export class JcfsDirective {
  @HostBinding('style.justify-content') jc: string;

  constructor(el: ElementRef) {
    this.jc = 'flex-start';
  }
}
@Directive({
  selector: '[jcse]'
})
export class JcseDirective {
  @HostBinding('style.justify-content') jc: string;

  constructor(el: ElementRef) {
    this.jc = 'space-evenly';
  }
}

/***
 * Align items directives
 */
@Directive({
  selector: '[aib]'
})
export class AibDirective {
  @HostBinding('style.align-items') ai: string;

  constructor(el: ElementRef) {
    this.ai = 'baseline';
  }
}
@Directive({
  selector: '[aic]'
})
export class AicDirective {
  @HostBinding('style.align-items') ai: string;

  constructor(el: ElementRef) {
    this.ai = 'center';
  }
}
@Directive({
  selector: '[aife]'
})
export class AifeDirective {
  @HostBinding('style.align-items') ai: string;

  constructor(el: ElementRef) {
    this.ai = 'flex-end';
  }
}

@Directive({
  selector: '[aifs]'
})
export class AifsDirective {
  @HostBinding('style.align-items') ai: string;

  constructor(el: ElementRef) {
    this.ai = 'flex-start';
  }
}

@Directive({
  selector: '[ais]'
})
export class AisDirective {
  @HostBinding('style.align-items') ai: string;

  constructor(el: ElementRef) {
    this.ai = 'stretch';
  }
}

/**
 * General flex directives
 */
@Directive({
  selector: '[flexShort]'
})
export class FlexDirective {
  @HostBinding('style.flex') _flex: string;
  @Input()
  public set flexShort(val: string) {
    this._flex = val;
  }
}

@Directive({
  selector: '[flexGrow]'
})
export class FlexGrowDirective {
  @HostBinding('style.flex-grow') fg: string;
  @Input()
  public set flexGrow(val: string) {
    this.fg = val;
  }
}
@Directive({
  selector: '[flexShrink]'
})
export class FlexShrinkDirective {
  @HostBinding('style.flex-shrink') fs: string;
  @Input()
  public set flexShrink(val: string) {
    this.fs = val;
  }
}
@Directive({
  selector: '[order]'
})
export class FlexOrderDirective {
  @HostBinding('style.order') _order: string;
  @Input()
  public set order(val: string) {
    this._order = val;
  }
}
