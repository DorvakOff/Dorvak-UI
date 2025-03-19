# dui-radio-group

```html
<dui-radio-group></dui-radio-group>
```

## Overview
The `dui-radio-group` component is a container for radio buttons. It is used to group radio buttons together.

## Properties
| Property    | Type     | Description                                 | Default    |
|-------------|----------|---------------------------------------------|------------|
| `value`     | string   | The value of the selected radio button.     |            |
| `disabled`  | boolean  | Disables the radio group.                   | `false`    |
| `label`     | string   | The label of the radio group.               |            |

## Methods
_None_

## Events
| Name          | Description                                        |
|---------------|----------------------------------------------------|
| `valueChange` | Emitted when the value of the radio group changes. |

## Slots
| Name      | Description                              |
|-----------|------------------------------------------|
| `default` | The list of `dui-radio-item` components. |

## Dependencies
_None_

---

# dui-radio-item

```html
<dui-radio-item></dui-radio-item>
```

## Overview
The `dui-radio-item` component is a radio button. It is used to select a single option from a list of options.

## Properties
| Property        | Type                                         | Description                                | Default        |
|-----------------|----------------------------------------------|--------------------------------------------|----------------|
| `value`         | string                                       | The value of the radio button.             |                |
| `disabled`      | boolean                                      | Disables the radio button.                 | `false`        |
| `label`         | string                                       | The label of the radio button.             |                |
| `checked`       | boolean                                      | Whether the radio button is checked.       | `false`        |
| `name`          | string                                       | The name of the radio button.              |                |
| `id`            | string                                       | The id of the radio button.                | a generated id |
| `labelPosition` | 'left' \| 'right'                            | The position of the label.                 | `'right'`      |

## Methods
_None_

## Events
| Name            | Description                                   |
|-----------------|-----------------------------------------------|
| `checkedChange` | Emitted when the checked state changes.       |

## Slots
_None_

## Dependencies
_None_

