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
import { HomeContainer } from '@app/modules/home/containers/home.container';

@NgModule({
    imports: [
        StyledComponentsModule,
    ],
    exports: [],
    declarations: [HomeContainer],
    providers: [AssetSandbox]
})
export class HomeModule {}
```

### Use custom HTML tag

```
<sc-flex fdr jcc aic>
    <sc-div color="grey" margin="32">
        Right side
    </sc-div>
</sc-flex>
```

## Style components

* div
* flex
* form
* img
* input
* li
* span
* ul

## Style properties

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

### Overflow properties

---

| Property    | Css property | Default | Input type |
| ----------- | :----------: | :-----: | :--------: |
| `overflow`  |   overflow   |  none   |   string   |
| `overflowX` |  overflow-x  |  none   |   string   |
| `overflowY` |  overflow-y  |  none   |   string   |

### Position properties

---

To be continued...

## Override styles

To override the property styles, use the `className` input parameter. This will create a class in of the corresponding element in stead of attaching a class name to the `sc` element.
