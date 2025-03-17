# dui-tabs

```html
<dui-tabs></dui-tabs>
```

## Overview
The `dui-tabs` component is a container for `dui-tab` components. It is used to group `dui-tab` components together and manage their visibility.

## Properties
| Property    | Type                        | Description                    | Default  |
|-------------|-----------------------------|--------------------------------|----------|
| `align`     | `left \| center \| right`   | The alignment of the tabs.     | `left`   |
| `selected`  | `string`                    | The title of the selected tab. |          |

## Methods
_None_

## Events
| Name        | Description                                     |
|-------------|-------------------------------------------------|
| `tabChange` | Emitted when the selected tab changes.          |

## Slots
| Name      | Description                         |
|-----------|-------------------------------------|
| `default` | The list of `dui-tab` components.   |

## Dependencies
_None_

---

# dui-tab

```html
<dui-tab></dui-tab>
```

## Overview
The `dui-tab` component is a container for tab content. It is used in conjunction with the `dui-tabs` component to display content based on the selected tab.

## Properties
| Property   | Type      | Description                                | Default   |
|------------|-----------|--------------------------------------------|-----------|
| `title`    | `string`  | The title of the tab.                      |           |
| `selected` | `boolean` | Whether the tab is selected.               | `false`   |
| `disabled` | `boolean` | Whether the tab is disabled.               | `false`   |

## Methods
_None_

## Events
_None_

## Slots
| Name      | Description              |
|-----------|--------------------------|
| `default` | The content of the tab.  |

## Dependencies
_None_
