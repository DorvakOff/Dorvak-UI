# dui-pagination

```html
<dui-pagination></dui-pagination>
```

## Overview
The `dui-pagination` component is a simple pagination component that allows the user to navigate through a list of items.

## Properties
| Property         | Type       | Description                                                    | Default |
|------------------|------------|----------------------------------------------------------------|---------|
| `totalItems`     | `number`   | The total number of items in the list.                         | `0`     |
| `totalPages`     | `number`   | The total number of pages in the list.                         | `0`     |
| `pageSize`       | `number`   | The number of items per page.                                  | `10`    |
| `currentPage`    | `number`   | The current page number (0 based).                             | `0`     |
| `showItemsCount` | `boolean`  | Whether to show the items count. ("Showing X to Y of Z items") | `true`  |

## Methods
_None_

## Events
| Name         | Description                                                                                  |
|--------------|----------------------------------------------------------------------------------------------|
| `pageChange` | Emitted when the current page is changed. The new page number is passed as the event detail. |

## Slots
_None_

## Dependencies
* [dui-button](#/docs/components/button)
