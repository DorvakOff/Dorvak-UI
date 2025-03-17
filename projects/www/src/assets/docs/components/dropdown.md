# dui-dropdown-menu

```html
<dui-dropdown-menu></dui-dropdown-menu>
```

## Overview
A dropdown component that can be used to display a list of options.

## Properties
| Property      | Type                                | Description                        | Default        |
|---------------|-------------------------------------|------------------------------------|----------------|
| `label`       | `string`                            | The label of the dropdown.         |                |
| `icon`        | `string`                            | The icon of the dropdown.          | "chevron-down" |
| `size`        | 'sm' \| 'default' \| 'lg' \| 'icon' | The size of the dropdown.          | 'default'      |
| `disabled`    | `boolean`                           | Whether the dropdown is disabled.  | false          |
| `buttonClass` | `string`                            | Additional classes for the button. |                |


## Methods
_None_

## Events
_None_

## Slots
| Name      | Description                           |
|-----------|---------------------------------------|
| `default` | The list of `dui-dropdown-item` items |

## Dependencies
* [dui-button](#/docs/components/button)

---

# dui-dropdown-item

```html
<dui-dropdown-item></dui-dropdown-item>
```

## Overview
A dropdown item component that can be used to display an option in a dropdown.

## Properties
| Property       | Type                                        | Description                                 | Default    |
|----------------|---------------------------------------------|---------------------------------------------|------------|
| `disabled`     | `boolean`                                   | Whether the dropdown item is disabled.      | `false`    |
| `closeOnClick` | `boolean`                                   | Whether the dropdown should close on click  | `true`     |

## Methods
_None_

## Events
_None_

## Slots
| Name      | Description                         |
|-----------|-------------------------------------|
| `default` | The content of the dropdown item.   |

## Dependencies
_None_
