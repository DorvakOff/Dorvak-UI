# dui-alert

```html
<dui-alert></dui-alert>
```

## Overview
The `dui-alert` component is used to display alerts or notifications to the user. It can be customized with different styles and icons.

## Properties

| Property   | Type                                                                            | Description                                | Default     |
|------------|---------------------------------------------------------------------------------|--------------------------------------------|-------------|
| `variant`  | `"primary" \| "secondary" \| "success" \| "destructive" \| "warning" \| "info"` | Defines the alert style.                   | `primary`   |
| `icon`     | `string \| readonly LucideIconNode[] \| undefined`                              | Icon displayed on the left of the message. | `undefined` |
| `closable` | `boolean`                                                                       | Shows a button to close the alert.         | `false`     |

## Methods
| Name      | Description                            |
|-----------|----------------------------------------|
| `dismiss` | Closes the alert.                      |

## Events
_None_

## Slots
| Name      | Description                           |
|-----------|---------------------------------------|
| `title`   | Title displayed in bold in the alert. |
| `default` | The alert message.                    |

## Dependencies
* [dui-button](#/docs/components/button)
