import { Input } from '@angular/core';

export class StylingProps {
  public styleObj = {};
  /***
   * Set class
   */
  @Input() className: string;
  private format(value: string | number): string {
    if (
      typeof value === 'number' ||
      /^\d+$/.test(value.charAt(value.length - 1))
    ) {
      return `${value}px`;
    }
    return value;
  }
  /**
   * Flex box props
   */
  @Input()
  set fdr(val: boolean) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = {
        ...this.styleObj,
        flexDirection: 'row',
        display: 'flex'
      };
    }
  }
  @Input()
  set fdc(val: boolean) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = {
        ...this.styleObj,
        flexDirection: 'column',
        display: 'flex'
      };
    }
  }
  @Input()
  set fdcr(val: boolean) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = {
        ...this.styleObj,
        flexDirection: 'column-reverse',
        display: 'flex'
      };
    }
  }
  @Input()
  set fdrr(val: boolean) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = {
        ...this.styleObj,
        flexDirection: 'row-reverse',
        display: 'flex'
      };
    }
  }
  @Input()
  set fw(val: boolean) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = {
        ...this.styleObj,
        flexWrap: 'wrap'
      };
    }
  }
  @Input()
  set fnw(val: boolean) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = {
        ...this.styleObj,
        flexWrap: 'nowrap'
      };
    }
  }
  @Input()
  set fwr(val: boolean) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = {
        ...this.styleObj,
        flexWrap: 'wrap-reverse'
      };
    }
  }
  @Input()
  set fffd(val: boolean) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = {
        ...this.styleObj,
        flexFlow: 'flex-direction'
      };
    }
  }
  @Input()
  set fffw(val: boolean) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = {
        ...this.styleObj,
        flexFlow: 'flex-wrap'
      };
    }
  }
  @Input()
  set fb(val: string | number) {
    this.styleObj = {
      ...this.styleObj,
      flexBasis: !!val ? val : 'auto'
    };
  }
  @Input()
  set jcsa(val: boolean) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = {
        ...this.styleObj,
        justifyContent: 'space-around',
        display: 'flex'
      };
    }
  }
  @Input()
  set jcsb(val: boolean) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = {
        ...this.styleObj,
        justifyContent: 'space-between',
        display: 'flex'
      };
    }
  }
  @Input()
  set jcc(val: boolean) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = {
        ...this.styleObj,
        justifyContent: 'center',
        display: 'flex'
      };
    }
  }
  @Input()
  set jcfe(val: boolean) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = {
        ...this.styleObj,
        justifyContent: 'flex-end',
        display: 'flex'
      };
    }
  }
  @Input()
  set jcfs(val: boolean) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = {
        ...this.styleObj,
        justifyContent: 'flex-start',
        display: 'flex'
      };
    }
  }
  @Input()
  set jcse(val: boolean) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = {
        ...this.styleObj,
        justifyContent: 'space-evenly',
        display: 'flex'
      };
    }
  }
  @Input()
  set aib(val: boolean) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = {
        ...this.styleObj,
        alignItems: 'baseline',
        display: 'flex'
      };
    }
  }
  @Input()
  set aic(val: boolean) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = {
        ...this.styleObj,
        alignItems: 'center',
        display: 'flex'
      };
    }
  }
  @Input()
  set aifs(val: boolean) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = {
        ...this.styleObj,
        alignItems: 'flex-start',
        display: 'flex'
      };
    }
  }
  @Input()
  set aife(val: boolean) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = {
        ...this.styleObj,
        alignItems: 'flex-end',
        display: 'flex'
      };
    }
  }
  @Input()
  set ais(val: boolean) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = {
        ...this.styleObj,
        alignItems: 'stretch',
        display: 'flex'
      };
    }
  }
  @Input()
  set acb(val: boolean) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = {
        ...this.styleObj,
        alignContent: 'baseline',
        display: 'flex'
      };
    }
  }
  @Input()
  set acc(val: boolean) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = {
        ...this.styleObj,
        alignContent: 'center',
        display: 'flex'
      };
    }
  }
  @Input()
  set acfs(val: boolean) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = {
        ...this.styleObj,
        alignContent: 'flex-start',
        display: 'flex'
      };
    }
  }
  @Input()
  set acfe(val: boolean) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = {
        ...this.styleObj,
        alignContent: 'flex-end',
        display: 'flex'
      };
    }
  }
  @Input()
  set acs(val: boolean) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = {
        ...this.styleObj,
        alignContent: 'stretch',
        display: 'flex'
      };
    }
  }
  @Input()
  set flex(val: string) {
    this.styleObj = {
      ...this.styleObj,
      flex: val
    };
  }
  @Input()
  set flexGrow(val: string) {
    this.styleObj = {
      ...this.styleObj,
      flexGrow: val
    };
  }
  @Input()
  set flexShrink(val: string) {
    this.styleObj = {
      ...this.styleObj,
      flexShrink: val
    };
  }
  @Input()
  set order(val: string) {
    this.styleObj = {
      ...this.styleObj,
      order: val
    };
  }
  /**
   * Overflow props
   */
  @Input()
  set overflowX(val: string) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = { ...this.styleObj, overflowX: val };
    }
  }
  @Input()
  set overflowY(val: string) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = { ...this.styleObj, overflowY: val };
    }
  }
  @Input()
  set overflow(val: string) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = { ...this.styleObj, overflow: val };
    }
  }

  /**
   * Position props
   */

  @Input()
  set float(val: string) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = { ...this.styleObj, float: val };
    }
  }

  @Input()
  set position(val: string) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = { ...this.styleObj, position: val };
    }
  }

  @Input()
  set display(val: string) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = { ...this.styleObj, display: val };
    }
  }

  @Input()
  set zIndex(val: string | number) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = { ...this.styleObj, zIndex: val };
    }
  }
  @Input()
  set left(val: string | number) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = { ...this.styleObj, left: this.format(val) };
    }
  }

  @Input()
  set right(val: string | number) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = { ...this.styleObj, right: this.format(val) };
    }
  }
  @Input()
  set top(val: string | number) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = { ...this.styleObj, top: this.format(val) };
    }
  }
  @Input()
  set bottom(val: string | number) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = { ...this.styleObj, bottom: this.format(val) };
    }
  }

  /**
   * Text align props
   */
  @Input()
  set tac(val: boolean) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = { ...this.styleObj, textAlign: 'center' };
    }
  }
  @Input()
  set tar(val: boolean) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = { ...this.styleObj, textAlign: 'right' };
    }
  }

  /***
   * Width props
   */
  @Input()
  set width(val: string | number) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = { ...this.styleObj, width: this.format(val) };
    }
  }
  @Input()
  set minWidth(val: string | number) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = { ...this.styleObj, minWidth: this.format(val) };
    }
  }
  @Input()
  set maxWidth(val: string | number) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = { ...this.styleObj, maxWidth: this.format(val) };
    }
  }
  /***
   * Height props
   */
  @Input()
  set height(val: string | number) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = { ...this.styleObj, height: this.format(val) };
    }
  }
  @Input()
  set minHeight(val: string | number) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = { ...this.styleObj, minHeight: this.format(val) };
    }
  }
  @Input()
  set maxHeight(val: string | number) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = { ...this.styleObj, maxHeight: this.format(val) };
    }
  }
  /**
   * Margin prop
   */
  @Input()
  set margin(val: string | number) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = { ...this.styleObj, margin: this.format(val) };
    }
  }
  @Input()
  set marginLeft(val: string | number) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = { ...this.styleObj, marginLeft: this.format(val) };
    }
  }
  @Input()
  set marginRight(val: string | number) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = { ...this.styleObj, marginRight: this.format(val) };
    }
  }
  @Input()
  set marginTop(val: string | number) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = { ...this.styleObj, marginTop: this.format(val) };
    }
  }
  @Input()
  set marginBottom(val: string | number) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = { ...this.styleObj, marginBottom: this.format(val) };
    }
  }
  /***
   * Padding props
   */
  @Input()
  set padding(val: string | number) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = { ...this.styleObj, padding: this.format(val) };
    }
  }
  @Input()
  set paddingLeft(val: string | number) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = { ...this.styleObj, paddingLeft: this.format(val) };
    }
  }
  @Input()
  set paddingRight(val: string | number) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = { ...this.styleObj, paddingRight: this.format(val) };
    }
  }
  @Input()
  set paddingTop(val: string | number) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = { ...this.styleObj, paddingTop: this.format(val) };
    }
  }
  @Input()
  set paddingBottom(val: string | number) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = { ...this.styleObj, paddingBottom: this.format(val) };
    }
  }
  /***
   * Border props
   */
  @Input()
  set borderColor(val: string) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = { ...this.styleObj, borderColor: val };
    }
  }
  @Input()
  set borderBottomColor(val: string) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = { ...this.styleObj, borderBottomColor: val };
    }
  }
  @Input()
  set borderTopColor(val: string) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = { ...this.styleObj, borderTopColor: val };
    }
  }
  @Input()
  set borderLeftColor(val: string) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = { ...this.styleObj, borderLeftColor: val };
    }
  }
  @Input()
  set borderRightColor(val: string) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = { ...this.styleObj, borderRightColor: val };
    }
  }
  @Input()
  set borderWidth(val: string | number) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = {
        ...this.styleObj,
        borderWidth: this.format(val),
        borderStyle: 'solid'
      };
    }
  }
  @Input()
  set borderBottomWidth(val: string | number) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = {
        ...this.styleObj,
        borderBottomWidth: this.format(val),
        borderBottomStyle: 'solid'
      };
    }
  }
  @Input()
  set borderTopWidth(val: string | number) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = {
        ...this.styleObj,
        borderTopWidth: this.format(val),
        borderTopStyle: 'solid'
      };
    }
  }
  @Input()
  set borderLeftWidth(val: string | number) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = {
        ...this.styleObj,
        borderLeftWidth: this.format(val),
        borderLeftStyle: 'solid'
      };
    }
  }
  @Input()
  set borderRightWidth(val: string | number) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = {
        ...this.styleObj,
        borderRightWidth: this.format(val),
        borderRightStyle: 'solid'
      };
    }
  }
  @Input()
  set borderRadius(val: string | number) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = {
        ...this.styleObj,
        borderRadius: this.format(val)
      };
    }
  }
  @Input()
  set borderBottomRightRadius(val: string | number) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = {
        ...this.styleObj,
        borderBottomRightRadius: this.format(val)
      };
    }
  }
  @Input()
  set borderBottomLeftRadius(val: string | number) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = {
        ...this.styleObj,
        borderBottomLeftRadius: this.format(val)
      };
    }
  }
  @Input()
  set borderTopLeftRadius(val: string | number) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = {
        ...this.styleObj,
        borderTopLeftRadius: this.format(val)
      };
    }
  }
  @Input()
  set borderTopRightRadius(val: string | number) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = {
        ...this.styleObj,
        borderTopRightRadius: this.format(val)
      };
    }
  }
  /***
   * Font props
   */
  @Input()
  set color(val: string) {
    this.styleObj = { ...this.styleObj, color: val };
  }
  @Input()
  set fontSize(val: string | number) {
    this.styleObj = { ...this.styleObj, fontSize: this.format(val) };
  }
  @Input()
  set fontWeight(val: string | number) {
    this.styleObj = { ...this.styleObj, fontWeight: this.format(val) };
  }
  @Input()
  set underline(val: boolean) {
    if (val !== null && `${val}` !== 'false') {
      this.styleObj = { ...this.styleObj, textDecoration: 'underline' };
    }
  }
  @Input()
  set whiteSpace(val: string) {
    this.styleObj = { ...this.styleObj, whiteSpace: val };
  }
  @Input()
  set textOverflow(val: string) {
    this.styleObj = { ...this.styleObj, textOverflow: val };
  }
  /**
   * Background props;
   */
  @Input()
  set backgroundColor(val: string) {
    this.styleObj = { ...this.styleObj, backgroundColor: val };
  }
  @Input()
  set backgroundSize(val: string) {
    this.styleObj = { ...this.styleObj, backgroundColor: val };
  }
  /***
   * Extra props
   */
  @Input()
  set cursor(val: string) {
    this.styleObj = { ...this.styleObj, cursor: val };
  }
  @Input()
  set blur(val: string | number) {
    this.styleObj = { ...this.styleObj, blur: this.format(val) };
  }
  @Input()
  set boxShadow(val: string) {
    this.styleObj = { ...this.styleObj, boxShadow: val };
  }
}
