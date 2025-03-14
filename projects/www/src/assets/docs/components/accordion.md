# dui-accordion

```html
<dui-accordion></dui-accordion>
```

## Overview
The `dui-accordion` component is used to create collapsible sections of content. It allows users to expand or collapse sections to view or hide additional information.

## Properties
_None_

## Methods
_None_

## Events
_None_

## Slots
| Name      | Description                                  |
|-----------|----------------------------------------------|
| `default` | The list of `dui-accordion-item` components. |

## Dependencies
* [dui-accordion-item](#/docs/components/accordion)

---

# dui-accordion-item

```html
<dui-accordion-item></dui-accordion-item>
```

## Overview

## Properties
| Property   | Type                                          | Description                                | Default   |
|------------|-----------------------------------------------|--------------------------------------------|-----------|
| `expanded` | `boolean`                                     | Indicates if the accordion is expanded.    | `false`   |

## Methods
| Name       | Description                           |
|------------|---------------------------------------|
| `open`     | Opens the accordion.                  |
| `close`    | Closes the accordion.                 |

## Events
_None_

## Slots
| Name      | Description                            |
|-----------|----------------------------------------|
| `default` | The content of the accordion item.     |

## Dependencies
_None_
