import {booleanAttribute, Component, EventEmitter, Input, OnInit, Output, ViewChild,} from '@angular/core';
import {BaseColumnDefinition, ColumnDefinition} from '../../../models/table/column-definition';
import {TableRowComponent} from '../table-row/table-row.component';
import {LucideAngularModule} from 'lucide-angular';
import {CheckboxComponent} from "../../checkbox/checkbox.component";
import {PaginationComponent} from "../../pagination/pagination.component";
import {TableHeaderComponent} from "../table-header/table-header.component";
import {ButtonComponent} from "../../button/button.component";
import {DropdownMenuComponent} from "../../dropdown/dropdown-menu/dropdown-menu.component";
import {DropdownItemComponent} from "../../dropdown/dropdown-item/dropdown-item.component";
import {ModalComponent} from "../../modal/modal.component";
import {SelectComponent, SelectItem} from "../../select/select.component";
import {InputComponent} from "../../input/input.component";
import {FilterDefinition} from "../../../models/table/filter-definition";
import {SortDefinition} from "../../../models/table/sort-definition";
import {TableDataAccessor} from "../../../models/table/table-data-accessor";
import {TableLocalDataAccessor} from "../../../models/table/table-local-data-accessor";
import {PaginatedResponse} from "../../../models/table/paginated-response";
import {DatePickerComponent} from "../../date-picker/date-picker.component";
import {GetDataParams} from "../../../models/table/get-data-params";

@Component({
  selector: 'dui-table',
  standalone: true,
  imports: [
    LucideAngularModule,
    TableRowComponent,
    CheckboxComponent,
    PaginationComponent,
    TableHeaderComponent,
    ButtonComponent,
    DropdownMenuComponent,
    DropdownItemComponent,
    ModalComponent,
    SelectComponent,
    InputComponent,
    DatePickerComponent
  ],
  template: `
    <div class="flex flex-col w-full h-full gap-2">
      <div class="flex items-center justify-between gap-2 w-full">
        <div class="flex items-center gap-2 w-full">
          <ng-content select="[slot=actions]"/>
        </div>
        <div class="flex items-center gap-2">
          <dui-button (click)="openFiltersModal()" icon="sliders-horizontal" variant="outline">
            Filters
          </dui-button>
          <dui-dropdown-menu icon="settings">
            @for (column of columnDefinitions; track $index) {
              <dui-dropdown-item (click)="toggleColumnVisibility(column)" closeOnClick="false"
                                 [disabled]="_visibleColumns.length <= 1 && _visibleColumns.includes(column)">
                <div class="flex items-center justify-between w-full">
                  {{ column.headerName ?? column.field }}

                  @if (_visibleColumns.includes(column)) {
                    <i-lucide name="check" size="16"/>
                  }
                </div>
              </dui-dropdown-item>
            }
          </dui-dropdown-menu>
        </div>
      </div>
      <table class="w-full">
        <thead class="flex flex-row rounded-tr-2xl rounded-tl-2xl">
          @if (selectable) {
            <th>
              <div
                class="flex items-center h-12 w-14 justify-center bg-muted text-primary rounded-tl-2xl"
              >
                @if (selectMode === 'multiple') {
                  <dui-checkbox (checkedChange)="selectAll($event)" [checked]="isAllChecked()"/>
                }
              </div>
            </th>
          }
          @for (header of _visibleColumns; track $index) {
            <dui-table-header class="w-full"
                              [column]="header"
                              [rowHeight]="rowHeight"
                              [sortable]="!loading && isSortable(header)"
                              [isFistColumn]="$first && !selectable"
                              [isLastColumn]="$last"
                              [sortIcon]="sortIcon"
                              [isCurrentSort]="_sortColumn?.field === header.field"
                              (sortChange)="toggleSort(header)"
            />
          }
        </thead>
        <tbody class="flex flex-col">
          @if (loading) {
            <tr class="flex w-full text-accent-foreground bg-accent">
              <td class="flex items-center justify-center w-full px-4 py-2 gap-2"
                  [colSpan]="_visibleColumns.length"
                  [style.height.px]="rowHeight">
                <i-lucide name="loader-circle" class="animate-spin text-primary"/>
              </td>
            </tr>
          } @else {
            @for (row of _loadedRows; track $index) {
              <dui-table-row [rowData]="row" [columnDefinitions]="_visibleColumns"
                             [rowHeight]="rowHeight" [selectable]="selectable" [selectMode]="selectMode"
                             (checkedChange)="handleChange($event, row)" [checked]="isChecked(row)"
                             [enableRowClick]="enableRowClick"
                             (rowClick)="rowClick.emit(row)"
                             [defaultColumnDefinition]="defaultColumnDefinition"
              />
            }
            @if (!totalItems) {
              <tr class="flex w-full text-accent-foreground bg-accent">
                <td class="flex items-center justify-center w-full px-4 py-2 gap-2"
                    [colSpan]="_visibleColumns.length"
                    [style.height.px]="rowHeight">
                  <i-lucide name="search-x" class="text-primary"/>
                  <span class="text-primary">No data available</span>
                </td>
              </tr>
            }
          }
        </tbody>
      </table>
      <dui-modal #filtersModal>
        <span slot="title">Filters</span>
        <span slot="subtitle">Select some filters to apply</span>

        <div class="flex flex-col gap-2">
          <dui-button icon="plus" variant="outline" (click)="addFilter()">
            Add Filter
          </dui-button>

          <div class="flex flex-col items center gap-2">
            @for (column of _filtersInPopup; track $index) {
              <div class="flex items-center gap-2">
                <dui-select placeholder="Column" [items]="filterableColumns()" [(selected)]="column.column" class="w-full" (selectedChange)="column.value = undefined; column.operator = ''"/>
                <dui-select [items]="getFiltersFor(column.column)" [(selected)]="column.operator" class="w-full"/>
                @if (getColumnDataType(column.column) === 'date') {
                  <dui-date-picker [(value)]="column.value" placeholder="Value" class="w-full" dateFormat="dd/MM/yyyy"/>
                } @else {
                  <dui-input placeholder="Value" [(value)]="column.value" class="w-full"/>
                }
                <dui-button variant="destructive" icon="trash-2" size="sm" (click)="removeFilter($index); $event.stopPropagation()"/>
              </div>
            }
          </div>
        </div>

        <div class="flex gap-2 justify-end" slot="footer">
          <dui-button (click)="filtersModal.close()" variant="outline">
            Cancel
          </dui-button>
          <dui-button (click)="this.saveFilters()">
            Apply
          </dui-button>
        </div>
      </dui-modal>
      <dui-pagination (pageChange)="handlePageChange($event)" [currentPage]="currentPage" [pageSize]="pageSize"
                      [totalItems]="totalItems" [totalPages]="totalPages"/>
    </div>
  `,
})
export class TableComponent implements OnInit {

  @ViewChild('filtersModal') filtersModal!: ModalComponent;

  @Output() selectedRowsChange: EventEmitter<any[]> = new EventEmitter<any[]>();
  @Output() rowClick: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  set columnDefinitions(value: ColumnDefinition[]) {
    this._columnDefinitions = value;
    this._visibleColumns = [...value];
  }

  @Input()
  private dataAccessor: TableDataAccessor = new TableLocalDataAccessor([]);

  @Input() rowHeight: number = 50;
  @Input()
  set data(data: any[]) {
    this._data = data;
    this.dataAccessor = new TableLocalDataAccessor(data);
  }

  @Input({transform: booleanAttribute}) selectable: boolean = false;
  @Input() selectMode: 'single' | 'multiple' = 'single';
  @Input({transform: booleanAttribute}) enableRowClick: boolean = false;
  @Input() pageSize: number = 10;

  @Input()
  set defaultColumnDefinition(value: BaseColumnDefinition) {
    this._defaultColumnDefinition = {
      ...this._defaultColumnDefinition,
      ...value
    }
  }

  @Input()
  set selectedRows(value: any[]) {
    let distinct = value.filter((item, index) => {
      return value.indexOf(item) === index;
    })
    this._selectedRows = distinct;
    this.selectedRowsChange.emit(distinct);
  }

  protected loading: boolean = false;
  protected _loadedRows: any[] = [];
  protected totalPages: number = 0;
  protected totalItems: number = 0;
  private _data: any[] = [];
  private _selectedRows: any[] = [];
  private _columnDefinitions: ColumnDefinition[] = [];
  protected _visibleColumns: ColumnDefinition[] = [];
  protected currentPage: number = 0;
  protected _filters: FilterDefinition[] = [];
  protected _filtersInPopup: FilterDefinition[] = [];
  protected filterOperators: {[key: string]: SelectItem[]} = {
    string: [
      {label: 'Equals', value: 'equals'},
      {label: 'Contains', value: 'contains'},
      {label: 'Starts with', value: 'startsWith'},
      {label: 'Ends with', value: 'endsWith'},
    ],
    number: [
      {label: 'Equals', value: 'equals'},
      {label: 'Greater than', value: 'greaterThan'},
      {label: 'Less than', value: 'lessThan'},
    ],
    date: [
      {label: 'Equals', value: 'equals'},
      {label: 'Before', value: 'before'},
      {label: 'After', value: 'after'},
    ],
  };

  get data(): any[] {
    return this._data;
  }

  get columnDefinitions(): ColumnDefinition[] {
    return this._columnDefinitions;
  }

  get selectedRows(): any[] {
    return this._selectedRows;
  }

  private _defaultColumnDefinition: BaseColumnDefinition = {
    sortable: true,
    filterable: true,
  };

  get defaultColumnDefinition(): BaseColumnDefinition {
    return this._defaultColumnDefinition;
  }

  protected _sortColumn: SortDefinition | null = null;

  protected handlePageChange(page: number): void {
    this.currentPage = page;
    this.loadRows();
  }

  private loadRows(): void {
    this._loadedRows = [];
    this.loading = true;

    const params: GetDataParams = {
      page: this.currentPage,
      pageSize: this.pageSize,
      filters: this._filters,
      columns: this.columnDefinitions,
      sort: this._sortColumn,
    }

    this.dataAccessor.loadRows(params).subscribe((paginatedResponse: PaginatedResponse) => {
      this._loadedRows = paginatedResponse.items;
      this.currentPage = paginatedResponse.currentPage;
      this.pageSize = paginatedResponse.pageSize;
      this.totalPages = paginatedResponse.totalPages;
      this.totalItems = paginatedResponse.totalItems;
      this.loading = false;
      this.selectedRows = []
    })
  }

  ngOnInit() {
    this.loadRows();
  }

  get sortIcon(): string {
    return this._sortColumn?.direction === 'asc' ? 'arrow-up' : 'arrow-down';
  }

  protected isSortable(column: ColumnDefinition): boolean {
    return column.sortable ?? this.defaultColumnDefinition.sortable ?? false;
  }

  protected toggleSort(column: ColumnDefinition): void {
    if (!this.isSortable(column)) return;

    if (this._sortColumn?.field === column.field) {
      switch (this._sortColumn.direction) {
        case 'asc':
          this._sortColumn.direction = 'desc';
          break;
        case 'desc':
          this._sortColumn = null;
          break;
      }
    } else {
      this._sortColumn = {field: column.field, direction: 'asc'};
    }
    this.loadRows()
  }

  protected handleChange(checked: boolean, row: any): void {
    if (this.selectMode === 'single') {
      if (checked) {
        this.selectedRows = [row];
      }
    } else if (this.selectMode === 'multiple') {
      if (checked) {
        this.selectedRows = [...this.selectedRows, row];
      } else {
        this.selectedRows = this.selectedRows.filter(r => r !== row);
      }
    }
  }

  protected isChecked(row: any) {
    if (this.selectMode === 'single') {
      return this.selectedRows[0] === row;
    } else if (this.selectMode === 'multiple') {
      return this.selectedRows.includes(row)
    }

    return false;
  }

  protected selectAll(checked: boolean): void {
    if (checked) {
      this.selectedRows = [...this._loadedRows];
    } else {
      this.selectedRows = [];
    }
  }

  protected isAllChecked(): boolean {
    return this._loadedRows.length > 0 && this._loadedRows.every(row => this.isChecked(row));
  }

  protected toggleColumnVisibility(column: ColumnDefinition): void {
    let visibleColumns = this._visibleColumns;
    let visible = visibleColumns.includes(column);

    if (visible) {
      visibleColumns = visibleColumns.filter(col => col !== column);
    } else {
      visibleColumns = [...visibleColumns, column];
    }

    this._visibleColumns = this.columnDefinitions.filter(col => visibleColumns.includes(col));
  }

  protected filterableColumns(): SelectItem[] {
    return this.columnDefinitions
      .filter(column =>column.filterable ?? this.defaultColumnDefinition.filterable ?? false)
      .map(column => ({
        label: column.headerName ?? column.field,
        value: column.field,
      }));
  }

  protected addFilter(): void {
    this._filtersInPopup.push({
      column: undefined,
      operator: 'equals',
      value: '',
    });
  }

  protected removeFilter($index: number) {
    this._filtersInPopup = this._filtersInPopup.filter((_, index) => index !== $index);

    if (this._filtersInPopup.length === 0) {
      this.addFilter();
    }
  }

  protected openFiltersModal() {
    this._filtersInPopup = [...this._filters.map(filter => ({
      column: filter.column,
      operator: filter.operator,
      value: filter.value,
    }))];

    if (this._filtersInPopup.length === 0) {
      this.addFilter();
    }

    this.filtersModal.open();
  }

  protected saveFilters() {
    this._filters = [...this._filtersInPopup.filter(f => f.column && f.operator && f.value).map(filter => ({
      column: filter.column,
      operator: filter.operator,
      value: filter.value,
    }))];
    this.filtersModal.close();
    this.loadRows();
  }

  protected getColumnDataType(column: string | undefined) {
    if (!column) return 'string';

    const columnDefinition = this.columnDefinitions.find(col => col.field === column);
    return columnDefinition?.dataType ?? 'string';
  }

  protected getFiltersFor(column: string | undefined) {
    return this.filterOperators[this.getColumnDataType(column)] ?? [];
  }
}
