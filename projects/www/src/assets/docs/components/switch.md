# dui-switch

```html
<dui-switch></dui-switch>
```

## Overview
The `dui-switch` component is a simple switch component that can be toggled on or off. It is a simple wrapper around a checkbox input element.

## Properties
| Property        | Type                                        | Description                                       | Default  |
|-----------------|---------------------------------------------|---------------------------------------------------|----------|
| `label`         | `string`                                    | The label to display next to the switch.          |          |
| `checked`       | `boolean`                                   | Whether the switch is checked or not.             | `false`  |
| `labelPosition` | `'left' \| 'right'`                         | The position of the label relative to the switch. | `'left'` |
| `name`          | `string`                                    | The name of the input element.                    |          |

## Methods
_None_

## Events
| Name            | Description                                   |
|-----------------|-----------------------------------------------|
| `checkedChange` | Emitted when the switch is toggled.           |

## Slots
| Name      | Description                                                         |
|-----------|---------------------------------------------------------------------|
| `default` | Content to display as an addition to the label, like a description. |

## Dependencies
_None_

