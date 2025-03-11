import { TableDataAccessor } from "./table-data-accessor";
import {Observable} from "rxjs";
import {FilterDefinition} from "./filter-definition";
import {SortDefinition} from "./sort-definition";
import {PaginatedResponse} from "./paginated-response";

export class TableLocalDataAccessor implements TableDataAccessor {

  private readonly data: any[] = [];

  constructor(data: any[]) {
    this.data = data;
  }

  loadRows(page: number, pageSize: number, filters: FilterDefinition[], sort: SortDefinition | null): Observable<PaginatedResponse> {
    return new Observable<PaginatedResponse>((observer) => {
      let filteredData = [...this.data];

      // Apply filters
      if (filters.length) {
        filteredData = filteredData.filter(row => {
          return filters.every(filter => {
            const value = `${row[filter.column!]}`;
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
          });
        });
      }

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
        currentPage: page,
        pageSize: pageSize,
        totalItems: filteredData.length,
        totalPages: Math.ceil(filteredData.length / pageSize),
        items: filteredData.slice(page * pageSize, (page + 1) * pageSize)
      }

      observer.next(paginatedResponse);
      observer.complete();
    });
  }

}
