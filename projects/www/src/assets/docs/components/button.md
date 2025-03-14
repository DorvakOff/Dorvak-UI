# dui-button

```html
<dui-button></dui-button>
```

## Overview
The `dui-button` component provides a customizable button with multiple styles, sizes, and optional icons.

## Properties
| Property       | Type                                                                                                                   | Description                                           | Default     |
|----------------|------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|-------------|
| `size`         | `primary' \| 'secondary' \| 'success' \| 'destructive'  \| 'warning' \| 'info' \| 'default' \| 'sm' \| 'lg' \| 'icon'` | Defines the button size.                              | `'default'` |
| `variant`      | `Variant \| 'link' \| 'ghost' \| 'outline'`                                                                            | Defines the button style variant.                     | `'primary'` |
| `icon`         | `string \| LucideIconNode[] \| undefined`                                                                              | Optional icon displayed in the button.                | `undefined` |
| `disabled`     | `boolean`                                                                                                              | Disables the button.                                  | `false`     |
| `loading`      | `boolean`                                                                                                              | Shows a loading indicator instead of content.         | `false`     |
| `submit`       | `boolean`                                                                                                              | Sets the button type to `"submit"`.                   | `false`     |
| `iconPosition` | `'left' \| 'right'`                                                                                                    | Position of the icon relative to the text.            | `'left'`    |
| `buttonClass`  | `string`                                                                                                               | Additional CSS classes for styling.                   | `''`        |

## Methods
| Name      | Description                 |
|-----------|-----------------------------|
| `focus()` | Sets focus on the button.   |

## Events
_None_

## Slots
| Name      | Description           |
|-----------|-----------------------|
| `default` | The button content.   |

## Dependencies
_None_
