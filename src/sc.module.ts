import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import StyledDirectives from './directives';

@NgModule({
  imports: [CommonModule],
  exports: [...StyledDirectives],
  declarations: [...StyledDirectives],
  providers: []
})
export class StyledComponentsModule {}
