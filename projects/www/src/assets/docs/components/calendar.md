# dui-calendar

```html
<dui-calendar></dui-calendar>
```

## Overview
The `dui-calendar` component provides an interactive calendar for date selection, with support for min/max date constraints.

## Properties
| Property  | Type       | Description                           | Default      |
|-----------|------------|---------------------------------------|--------------|
| `min`     | `Date`     | The minimum selectable date.          | `undefined`  |
| `max`     | `Date`     | The maximum selectable date.          | `undefined`  |
| `value`   | `Date`     | The currently selected date.          | `new Date()` |

## Methods
_None_

## Events
| Name          | Description                             |
|---------------|-----------------------------------------|
| `valueChange` | Emits the selected date when changed.   |

## Slots
_None_

## Dependencies
* [dui-button](#/docs/components/button)
