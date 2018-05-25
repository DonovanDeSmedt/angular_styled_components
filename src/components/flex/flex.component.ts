import { Component, Input } from '@angular/core';
import { StylingProps } from '../../styling-props/styling.component';

@Component({
  selector: 'sc-flex',
  templateUrl: './flex.component.html'
})
export class Flex extends StylingProps {
  constructor() {
    super();
    this.styleObj = { ...this.styleObj, display: 'flex' };
  }
}
