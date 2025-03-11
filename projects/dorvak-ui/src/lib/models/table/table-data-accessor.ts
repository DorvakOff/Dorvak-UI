import {Observable} from "rxjs";
import {FilterDefinition} from "./filter-definition";
import {SortDefinition} from "./sort-definition";
import {PaginatedResponse} from "./paginated-response";

export interface TableDataAccessor {

  loadRows: (page: number, pageSize: number, filters: FilterDefinition[], sort: SortDefinition | null) => Observable<PaginatedResponse>;

}
