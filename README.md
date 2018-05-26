# angular-styled-components

An Angular module that provides styled components to components, the same them in React.

## Installation

With npm: `npm install angular-styled-components --save`

or with yarn: `yarn add angular-styled-components`

## Usage

### Import `StyledComponentsModule`

```
import { NgModule } from '@angular/core';
import { StyledComponentsModule } from 'angular-styled-components';
import { HomeComponent } from '@app/modules/home/home.component';

@NgModule({
    imports: [
        StyledComponentsModule,
    ],
    exports: [],
    declarations: [HomeComponent],
    providers: []
})
export class HomeModule {}
```

### Use in HTML tag

```
<div fdr jcc aic>
    <div color="grey" margin="32" flex="1">
        Right side
    </div>
    <div backgroundColor="red" padding="2em" flexGrow="2">
        Left sides
    </div>
</div>
```

## Style properties

### Background properties

---

| Property          |   Css property   | Default | Input type |
| ----------------- | :--------------: | :-----: | :--------: |
| `background`      |    background    |  none   |   string   |
| `backgroundColor` | background-color | initial |   string   |
| `backgroundSize`  | background-size  | initial |   string   |

### Border properties

---

| Property                  |        Css property        | Default |    Input type     |
| ------------------------- | :------------------------: | :-----: | :---------------: |
| `borderColor`             |        border-color        | initial |      string       |
| `borderTopColor`          |      border-top-color      | initial |      string       |
| `borderBottomColor`       |    border-bottom-color     | initial |      string       |
| `borderLeftColor`         |     border-left-color      | initial |      string       |
| `borderRightColor`        |      border-top-color      | initial |      string       |
| `borderWidth`             |        border-width        | initial | string or integer |
| `borderTopWidth`          |      border-top-width      | initial | string or integer |
| `borderBottomWidth`       |    border-bottom-width     | initial | string or integer |
| `borderLeftWidth`         |     border-left-width      | initial | string or integer |
| `borderRightWidth`        |     border-right-width     | initial | string or integer |
| `borderRadius`            |       border-radius        | initial |      string       |
| `borderTopLeftRadius`     |   border-top-left-radius   | initial |      string       |
| `borderTopRightRadius`    |  border-top-right-radius   | initial |      string       |
| `borderBottomLeftRadius`  | border-bottom-left-radius  | initial |      string       |
| `borderBottomRightRadius` | border-bottom-right-radius | initial |      string       |

### Extra properties

---

| Property     | Css property | Default | Input type |
| ------------ | :----------: | :-----: | :--------: |
| `cursor`     |    cursor    | initial |   string   |
| `blur`       |     blur     | initial |   string   |
| `box-shadow` |  box-shadow  | initial |   string   |

### Flex properties

---

| Property     |  Css property   |    Default     | Input type |
| ------------ | :-------------: | :------------: | :--------: |
| `fdr`        | flex-direction  |      row       |    none    |
| `fdc`        | flex-direction  |     column     |    none    |
| `fdrr`       | flex-direction  |  row-reverse   |    none    |
| `fdcr`       | flex-direction  | column-reverse |    none    |
| `fw`         |    flex-wrap    |      wrap      |    none    |
| `fnw`        |    flex-wrap    |     nowrap     |    none    |
| `fwr`        |    flex-wrap    |  wrap-reverse  |    none    |
| `fffd`       |    flex-flow    | flex-direction |    none    |
| `fffw`       |    flex-flow    |   flex-wrap    |    none    |
| `fb`         |   flex-basis    |      auto      |  integer   |
| `jcsa`       | justify-content |  space-around  |    none    |
| `jcsb`       | justify-content | space-between  |    none    |
| `jcc`        | justify-content |     center     |    none    |
| `jcfe`       | justify-content |    flex-end    |    none    |
| `jcfs`       | justify-content |   flex-start   |    none    |
| `jcse`       | justify-content |  space-evenly  |    none    |
| `aib`        |   align-items   |    baseline    |    none    |
| `aic`        |   align-items   |     center     |    none    |
| `aife`       |   align-items   |    flex-end    |    none    |
| `aifs`       |   align-items   |   flex-start   |    none    |
| `ais`        |   align-items   |    stretch     |    none    |
| `acb`        |  align-content  |    baseline    |    none    |
| `acc`        |  align-content  |     center     |    none    |
| `acfe`       |  align-content  |    flex-end    |    none    |
| `acfs`       |  align-content  |   flex-start   |    none    |
| `acs`        |  align-content  |    stretch     |    none    |
| `flex`       |      flex       |       1        |  integer   |
| `flexGrow`   |    flex-grow    |       1        |  integer   |
| `flexShrink` |   flex-shrink   |       1        |  integer   |
| `order`      |      order      |       1        |  integer   |

### Font properties

---

| Property       |  Css property   |   Default    |    Input type     |
| -------------- | :-------------: | :----------: | :---------------: |
| `color`        |      color      |   initial    |      string       |
| `textWeight`   |   text-weight   |    normal    | string or integer |
| `underline`    | text-decoration |  underline   |       none        |
| `lineThrough`  | text-decoration | line-through |       none        |
| `whiteSpace`   |   white-space   |   initial    |      string       |
| `textOverflow` |  text-overflow  |   initial    |      string       |

### Height properties

---

| Property    | Css property | Default |    Input type     |
| ----------- | :----------: | :-----: | :---------------: |
| `height`    |    height    | initial | string or integer |
| `maxHeight` |  max-height  | initial | string or integer |
| `minHeight` |  min-height  | initial | string or integer |

### Margin properties

---

| Property       | Css property  | Default |    Input type     |
| -------------- | :-----------: | :-----: | :---------------: |
| `margin`       |    margin     |    0    | string or integer |
| `marginLeft`   |  margin-left  |    0    | string or integer |
| `marginRight`  | margin-right  |    0    | string or integer |
| `marginTop`    |  margin-top   |    0    | string or integer |
| `marginBottom` | margin-bottom |    0    | string or integer |

### Overflow properties

---

| Property    | Css property | Default | Input type |
| ----------- | :----------: | :-----: | :--------: |
| `overflow`  |   overflow   |  none   |   string   |
| `overflowX` |  overflow-x  |  none   |   string   |
| `overflowY` |  overflow-y  |  none   |   string   |

### Padding properties

---

| Property        |  Css property  | Default |    Input type     |
| --------------- | :------------: | :-----: | :---------------: |
| `padding`       |    padding     |    0    | string or integer |
| `paddingLeft`   |  padding-left  |    0    | string or integer |
| `paddingRight`  | padding-right  |    0    | string or integer |
| `paddingTop`    |  padding-top   |    0    | string or integer |
| `paddingBottom` | padding-bottom |    0    | string or integer |

### Position properties

---

| Property   | Css property | Default | Input type |
| ---------- | :----------: | :-----: | :--------: |
| `position` |   position   | initial |   string   |
| `display`  |   display    |  block  |   string   |
| `zIndex`   |   z-index    |    1    |  integer   |
| `left`     |     left     |    0    |  integer   |
| `right`    |    right     |    0    |  integer   |
| `top`      |     top      |    0    |  integer   |
| `bottom`   |    bottom    |    0    |  integer   |

### TextAlign properties

---

| Property | Css property | Default | Input type |
| -------- | :----------: | :-----: | :--------: |
| `tac`    |  text-align  | center  |    none    |
| `tar`    |  text-align  |  right  |    none    |
| `tal`    |  text-align  |  left   |    none    |

### Width properties

---

| Property   | Css property | Default |    Input type     |
| ---------- | :----------: | :-----: | :---------------: |
| `width`    |    width     | initial | string or integer |
| `maxWidth` |  max-width   | initial | string or integer |
| `minWidth` |  min-width   | initial | string or integer |

## Override style properties

In order to override the style properties, use class
