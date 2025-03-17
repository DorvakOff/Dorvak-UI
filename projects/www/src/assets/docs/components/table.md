# dui-table

```html
<dui-table></dui-table>
```

## Overview
The `dui-table` component is a table component that can be used to display data in a tabular format.
It is a wrapper around the native HTML `<table>` element and provides additional functionality such as sorting, filtering, and pagination.
It includes features such as column hiding, row selection and custom cell rendering.

## Properties
| Property                    | Type                   | Description                                                                                                              | Default                                 |
|-----------------------------|------------------------|--------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|
| `columnDefinitions`         | `ColumnDefinition[]`   | An array of column definitions that define the columns of the table.                                                     | `[]`                                    |
| `dataAccessor`              | `TableDataAccessor`    | A class instance implementing the `TableDataAccessor` interface. Useful for fetching data from a remote source.          | `TableLocalDataAccessor`                |
| `rowHeight`                 | `number`               | The height of each row in pixels.                                                                                        | `50`                                    |
| `data`                      | `any[]`                | The data to be displayed in the table. If set, the `dataAccessor` will be ignored and set to a `TableLocalDataAccessor`. | `[]`                                    |
| `selectable`                | `boolean`              | Whether rows in the table can be selected.                                                                               | `false`                                 |
| `selectMode`                | `single` \| `multiple` | The selection mode of the table.                                                                                         | `single`                                |
| `enableRowClick`            | `boolean`              | Whether rows can be selected by clicking on them.                                                                        | `true`                                  |
| `pageSize`                  | `number`               | The number of rows to display per page.                                                                                  | `10`                                    |
| `defaultColumnDefinitions`  | `BaseColumnDefinition` | The default column definitions used for all columns. Can be overridden by column definitions.                            | `{ sortable: true, filterable: true }`  |
| `selectedRows`              | `any[]`                | The selected rows in the table.                                                                                          | `[]`                                    |

## Methods
_None_

## Events
| Name                  | Description                                |
|-----------------------|--------------------------------------------|
| `rowClick`            | Emitted when a row is clicked.             |
| `selectedRowsChange`  | Emitted when the selected rows change.     |

## Slots
| Name      | Description                                                 |
|-----------|-------------------------------------------------------------|
| `actions` | Slot for custom buttons to display on the top of the table. |

## Dependencies
* [dui-button](#/docs/components/button)
* [dui-checkbox](#/docs/components/checkbox)
* [dui-dropdown](#/docs/components/dropdown)
* [dui-modal](#/docs/components/modal)
* [dui-pagination](#/docs/components/pagination)
* [dui-select](#/docs/components/select)
* [dui-input](#/docs/components/input)
* [dui-date-picker](#/docs/components/date-picker)
