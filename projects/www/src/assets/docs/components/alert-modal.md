# dui-alert-modal

```html
<dui-alert-modal></dui-alert-modal>
```

## Overview
The `dui-alert-modal` component is used to display a confirmation modal dialog with customizable title, message, and action buttons.

## Properties
| Property      | Type     | Description                                              | Default                                              |
|---------------|----------|----------------------------------------------------------|------------------------------------------------------|
| `title`       | `string` | Title displayed in the modal header.                     | `'Are you sure?'`                                    |
| `message`     | `string` | Message displayed in the modal body.                     | `'You are about to delete this item, are you sure?'` |
| `confirmText` | `string` | Text for the confirm button.                             | `'Continue'`                                         |
| `cancelText`  | `string` | Text for the cancel button.                              | `'Cancel'`                                           |

## Methods
| Name    | Description                           |
|---------|---------------------------------------|
| `open`  | Opens the modal.                      |
| `close` | Closes the modal.                     |

## Events
| Name      | Description                                                       |
|-----------|-------------------------------------------------------------------|
| `confirm` | Emitted when the confirm button is clicked.                       |
| `cancel`  | Emitted when the cancel button is clicked or the modal is closed. |

## Slots
_None_

## Dependencies
* [dui-button](#/docs/components/button)
* [dui-modal](#/docs/components/modal)
