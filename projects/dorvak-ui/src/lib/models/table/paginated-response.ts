export interface PaginatedResponse<T extends any[] = any[]> {
  currentPage: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  items: T[];
}
