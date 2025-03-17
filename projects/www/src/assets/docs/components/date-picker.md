# dui-date-picker

```html
<dui-date-picker></dui-date-picker>
```

## Overview
A date picker component. This component is a wrapper around the `dui-calendar` component.

## Properties
| Property      | Type      | Description                                | Default         |
|---------------|-----------|--------------------------------------------|-----------------|
| `label`       | `string`  | The label of the date picker.              |                 |
| `placeholder` | `string`  | The placeholder of the date picker.        | "Select a date" |
| `disabled`    | `boolean` | Whether the date picker is disabled.       | `false`         |
| `required`    | `boolean` | Whether the date picker is required.       | `false`         |
| `dateFormat`  | `string`  | The format of the date.                    | "fullDate"      |
| `value`       | `Date`    | The value of the date picker.              |                 |

## Methods
_None_

## Events
| Name          | Description                                        |
|---------------|----------------------------------------------------|
| `valueChange` | Emitted when the value of the date picker changes. |

## Slots
_None_

## Dependencies
* [dui-calendar](#/docs/components/calendar)
* [dui-input](#/docs/components/input)
