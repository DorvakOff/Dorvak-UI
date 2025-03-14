import {Observable} from "rxjs";
import {PaginatedResponse} from "./paginated-response";
import {GetDataParams} from "./get-data-params";

export interface TableDataAccessor {

  loadRows: (params: GetDataParams) => Observable<PaginatedResponse>;

}
