import { TableDataAccessor } from "./table-data-accessor";
import {Observable} from "rxjs";
import {FilterDefinition} from "./filter-definition";
import {PaginatedResponse} from "./paginated-response";
import {GetDataParams} from "./get-data-params";

export class TableLocalDataAccessor implements TableDataAccessor {

  private readonly data: any[] = [];

  constructor(data: any[]) {
    this.data = data;
  }

  loadRows(params: GetDataParams): Observable<PaginatedResponse> {
    return new Observable<PaginatedResponse>((observer) => {
      let filteredData = [...this.data];

      // Apply filters
      if (params.filters.length) {
        filteredData = filteredData.filter(row => {
          return params.filters.every(filter => {
            const value = `${row[filter.column!]}`;
            return this.matchesFilter(value, filter, params);
          });
        });
      }

      const sort = params.sort;

      // Apply sorting
      if (sort) {
        filteredData = filteredData.sort((a, b) => {
          const aValue = a[sort.field];
          const bValue = b[sort.field];

          if (aValue < bValue) return sort.direction === 'asc' ? -1 : 1;
          if (aValue > bValue) return sort.direction === 'asc' ? 1 : -1;
          return 0;
        });
      }

      let paginatedResponse: PaginatedResponse = {
        currentPage: params.page,
        pageSize: params.pageSize,
        totalItems: filteredData.length,
        totalPages: Math.ceil(filteredData.length / params.pageSize),
        items: filteredData.slice(params.page * params.pageSize, (params.page + 1) * params.pageSize)
      }

      observer.next(paginatedResponse);
      observer.complete();
    });
  }

  private matchesFilter(value: string, filter: FilterDefinition, params: GetDataParams) {
    let dataType = params.columns.find(column => column.field === filter.column)?.dataType ?? 'string';
    switch (dataType) {
      case 'string':
        return this.stringFilter(value, filter);
      case 'number':
        return this.numberFilter(value, filter);
      case 'date':
        return this.dateFilter(value, filter);
      default:
        return true;
    }
  }

  private stringFilter(value: string, filter: FilterDefinition) {
    switch (filter.operator) {
      case 'equals':
        return value === filter.value;
      case 'contains':
        return value.includes(filter.value);
      case 'startsWith':
        return value.startsWith(filter.value);
      case 'endsWith':
        return value.endsWith(filter.value);
      default:
        return true;
    }
  }

  private numberFilter(value: string, filter: FilterDefinition) {
    const numValue = parseFloat(value);
    const filterValue = parseFloat(filter.value);
    switch (filter.operator) {
      case 'equals':
        return numValue === filterValue;
      case 'greaterThan':
        return numValue > filterValue;
      case 'lessThan':
        return numValue < filterValue;
      default:
        return true;
    }
  }

  private dateFilter(value: string, filter: FilterDefinition) {
    const dateValue = new Date(value);
    dateValue.setHours(0, 0, 0, 0); // Normalize time to midnight
    const filterValue = new Date(filter.value);
    filterValue.setHours(0, 0, 0, 0); // Normalize time to midnight

    switch (filter.operator) {
      case 'equals':
        return dateValue.getTime() === filterValue.getTime();
      case 'after':
        return dateValue.getTime() > filterValue.getTime();
      case 'before':
        return dateValue.getTime() < filterValue.getTime();
      default:
        return true;
    }
  }
}
