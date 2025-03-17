# dui-modal

```html
<dui-modal></dui-modal>
```

## Overview
A modal is a dialog box or popup, displayed over the current page. It is used to display additional information or a form that requires user input. Modals are often used to warn users of potentially dangerous actions or to ask for confirmation before proceeding.

## Properties
| Property            | Type                                    | Description                                               | Default   |
|---------------------|-----------------------------------------|-----------------------------------------------------------|-----------|
| `closeable`         | `boolean`                               | Whether the modal can be closed by the user               | `true`    |
| `allowClickOutside` | `boolean`                               | Whether the modal can be closed by clicking outside of it | `true`    |

## Methods
| Name      | Description                           |
|-----------|---------------------------------------|
| `open`    | Open the modal                        |
| `close`   | Close the modal                       |

## Events
| Name      | Description                             |
|-----------|-----------------------------------------|
| `onClose` | Emitted when the modal is closed        |


## Slots
| Name       | Description                          |
|------------|--------------------------------------|
| `title`    | The title of the modal               |
| `subtitle` | A subtitle for the modal             |
| `default`  | The main content of the modal        |
| `footer`   | The footer of the modal              |

## Dependencies
* [dui-button](#/docs/components/button)
* [dui-card](#/docs/components/card)
