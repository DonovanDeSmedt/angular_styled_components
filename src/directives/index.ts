import * as backgroundDirectives from './background.directives';
import * as borderDirectives from './border.directives';
import * as extraDirectives from './extra.directives';
import * as flexDirectives from './flex.directives';
import * as fontDirectives from './font.directives';
import * as heightDirectives from './height.directives';
import * as marginDirectives from './margin.directives';
import * as overflowDirectives from './overflow.directives';
import * as paddingDirectives from './padding.directives';
import * as positionDirectives from './position.directives';
import * as textAlignDirectives from './textAlign.directives';
import * as widthDirectives from './width.directives';

export default [
  ...Object.keys(backgroundDirectives).map(k => backgroundDirectives[k]),
  ...Object.keys(borderDirectives).map(k => borderDirectives[k]),
  ...Object.keys(extraDirectives).map(k => extraDirectives[k]),
  ...Object.keys(flexDirectives).map(k => flexDirectives[k]),
  ...Object.keys(fontDirectives).map(k => fontDirectives[k]),
  ...Object.keys(heightDirectives).map(k => heightDirectives[k]),
  ...Object.keys(marginDirectives).map(k => marginDirectives[k]),
  ...Object.keys(overflowDirectives).map(k => overflowDirectives[k]),
  ...Object.keys(paddingDirectives).map(k => paddingDirectives[k]),
  ...Object.keys(positionDirectives).map(k => positionDirectives[k]),
  ...Object.keys(textAlignDirectives).map(k => textAlignDirectives[k]),
  ...Object.keys(widthDirectives).map(k => widthDirectives[k])
];
