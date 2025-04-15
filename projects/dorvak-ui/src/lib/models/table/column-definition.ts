import {Type} from "@angular/core";

export type BaseColumnDefinition = {
  sortable?: boolean;
  headerClass?: string;
  cellClass?: string;
  width?: number;
  filterable?: boolean;
  dataType?: 'string' | 'number' | 'date';
  dateFormat?: string;
  cellRenderer?: Type<any> | null | ((params: any) => string | boolean);
}

export type ColumnDefinition = BaseColumnDefinition & {
  field: string;
  headerName?: string;
  filterPlaceholder?: string;
}
