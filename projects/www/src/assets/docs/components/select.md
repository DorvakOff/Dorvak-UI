# dui-select

```html
<dui-select></dui-select>
```

## Overview
The `dui-select` component is a select input that allows the user to select an option from a list of options.

## Properties
| Property      | Type           | Description                                    | Default     |
|---------------|----------------|------------------------------------------------|-------------|
| `label`       | `string`       | The label for the select input.                |             |
| `items`       | `SelectItem[]` | The options for the select input.              | `[]`        |
| `placeholder` | `string`       | The placeholder for the select input.          | "Select..." |
| `disabled`    | `boolean`      | Whether the select input is disabled.          | `false`     |
| `required`    | `boolean`      | Whether the select input is required.          | `false`     |
| `inputClass`  | `string`       | Additional classes to add to the select input. |             |
| `selected`    | `string`       | The selected value of the select input.        |             |


## Methods
_None_

## Events
| Name             | Description                                |
|------------------|--------------------------------------------|
| `selectedChange` | Emitted when the selected value changes.   |

## Slots
_None_

## Dependencies
* [dui-input](#/docs/components/input)
