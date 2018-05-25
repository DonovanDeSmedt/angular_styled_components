import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Div, Flex, Form, Image, Input, Li, Span, Ul } from './components';

@NgModule({
  imports: [CommonModule],
  exports: [Div, Flex, Form, Image, Input, Li, Span, Ul],
  declarations: [Div, Flex, Form, Image, Input, Li, Span, Ul],
  providers: []
})
export class StyledComponentsModule {}
