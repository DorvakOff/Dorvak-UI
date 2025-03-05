import {ICellRenderer} from "./cell-renderer";

export type BaseColumnDefinition = {
  sortable?: boolean;
  headerClass?: string;
  cellClass?: string;
  width?: number;
  filterable?: boolean;
  cellRenderer?: (new (...args: any[]) => ICellRenderer) | ((params: any) => string | boolean);
}

export type ColumnDefinition = BaseColumnDefinition & {
  field: string;
  headerName?: string;
}
