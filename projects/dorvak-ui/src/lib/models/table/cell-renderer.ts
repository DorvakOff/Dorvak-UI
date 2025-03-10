import {ColumnDefinition} from "./column-definition";

export interface ICellRenderer {
  duiInit(params: ICellRendererOptions<any, any>): void;
}

export interface ICellRendererOptions<T = any, K extends keyof T = keyof T> {
  data: T;
  column: ColumnDefinition;
  field: K;
  value: T[K];
}
