# dui-combobox

```html
<dui-combobox></dui-combobox>
```

## Overview
The `dui-combobox` component is a dropdown list with a search input. It allows the user to select one or multiple items from a list.

## Properties
| Property      | Type             | Description                      | Default       |
|---------------|------------------|----------------------------------|---------------|
| `label`       | `string`         | Label of the combobox            |               |
| `items`       | `ComboboxItem[]` | Items of the combobox            | `[]`          | 
| `placeholder` | `string`         | Placeholder of the combobox      | "Select..."   |
| `disabled`    | `boolean`        | Disables the combobox            | `false`       |
| `required`    | `boolean`        | Makes the combobox required      | `false`       |
| `multi`       | `boolean`        | Allows multiple selection        | `false`       |
| `inputClass`  | `string`         | Additional classes for the input |               |
| `selected`    | `any \| any[]`   | Value of the selected item(s)    |               |

## Methods
_None_

## Events
| Name             | Description                              |
|------------------|------------------------------------------|
| `selectedChange` | Emitted when the selected item(s) change |

## Slots
_None_

## Dependencies
* [dui-input](#/docs/components/input)
