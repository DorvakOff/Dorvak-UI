import {FilterDefinition} from "./filter-definition";
import {SortDefinition} from "./sort-definition";
import {ColumnDefinition} from "./column-definition";

export interface GetDataParams {
  page: number;
  pageSize: number;
  filters: FilterDefinition[];
  sort: SortDefinition | null;
  columns: ColumnDefinition[];
}
