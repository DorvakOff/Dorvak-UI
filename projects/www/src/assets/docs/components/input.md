# dui-input

```html
<dui-input></dui-input>
```

## Overview
A simple input field.

## Properties
| Property             | Type                                      | Description                                | Default     |
|----------------------|-------------------------------------------|--------------------------------------------|-------------|
| `label`              | `string`                                  | The label for the input field.             |             |
| `type`               | `string`                                  | The type of input field.                   | `text`      |
| `placeholder`        | `string`                                  | The placeholder for the input field.       |             |
| `id`                 | `string`                                  | The id for the input field.                | A random id |
| `pattern`            | `string                    \| null`       | The pattern for the input field.           | `null`      |
| `maxlength`          | `string \| number \| null`                | The maximum length for the input field.    | `null`      |
| `name`               | `string`                                  | The name for the input field.              |             |
| `icon`               | `string \| LucideIconNode[] \| undefined` | The icon for the input field.              | undefined   |
| `iconPosition`       | `left \| right`                           | The position of the icon.                  | `right`     |
| `autocomplete`       | `string`                                  | The autocomplete for the input field.      | `off`       |
| `min`                | `string \| number \| null`                | The minimum value for the input field.     | `null`      |
| `max`                | `string \| number \| null`                | The maximum value for the input field.     | `null`      |
| `disabled`           | `boolean`                                 | Whether the input field is disabled.       | `false`     |
| `required`           | `boolean`                                 | Whether the input field is required.       | `false`     |
| `readonly`           | `boolean`                                 | Whether the input field is readonly.       | `false`     |
| `hideArrows`         | `boolean`                                 | If the input is a number, hide the arrows. | `false`     |
| `inputClass`         | `string`                                  | Additional classes for the input field.    |             |
| `disableErrorBorder` | `boolean`                                 | Whether to disable the error border.       | `false`     |
| `value`              | `string`                                  | The value of the input field.              |             |

## Methods
| Name      | Description                           |
|-----------|---------------------------------------|
| `focus`   | Focuses the input field.              |

## Events
| Name          | Description                                        |
|---------------|----------------------------------------------------|
| `valueChange` | Emitted when the value of the input field changes. |
| `iconClick`   | Emitted when the icon is clicked.                  |

## Slots
| Name               | Description                              |
|--------------------|------------------------------------------|
| `before`           | Slot for content before the input field. |
| `after \| default` | Slot for content after the input field.  |

## Dependencies
_None_
