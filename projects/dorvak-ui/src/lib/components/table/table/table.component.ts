import {booleanAttribute, Component, EventEmitter, Input, Output, ViewChild,} from '@angular/core';
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

interface FilterDefinition {
  column: string | undefined;
  operator: string;
  value: string;
}

@Component({
  selector: 'dui-table',
  standalone: true,
  imports: [LucideAngularModule, TableRowComponent, CheckboxComponent, PaginationComponent, TableHeaderComponent, ButtonComponent, DropdownMenuComponent, DropdownItemComponent, ModalComponent, SelectComponent, InputComponent],
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
            @for (row of filteredAndSortedData; track $index) {
              <dui-table-row [rowData]="row" [columnDefinitions]="_visibleColumns"
                             [rowHeight]="rowHeight" [selectable]="selectable" [selectMode]="selectMode"
                             (checkedChange)="handleChange($event, row)" [checked]="isChecked(row)"
                             [enableRowClick]="enableRowClick"
                             (rowClick)="rowClick.emit(row)"
              />
            }
            @if (!data.length) {
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
                <dui-select placeholder="Column" [items]="filterableColumns()" [(selected)]="column.column" class="w-full"/>
                <dui-select [items]="filterOperators" [(selected)]="column.operator" class="w-full"/>
                <dui-input placeholder="Value" [(value)]="column.value" class="w-full"/>
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
                      [total]="data.length"/>
    </div>
  `,
})
export class TableComponent {

  @ViewChild('filtersModal') filtersModal!: ModalComponent;

  @Output() selectedRowsChange: EventEmitter<any[]> = new EventEmitter<any[]>();
  @Output() rowClick: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  set columnDefinitions(value: ColumnDefinition[]) {
    this._columnDefinitions = value;
    this._visibleColumns = [...value];
  }

  @Input() rowHeight: number = 50;
  @Input() data: any[] = [];
  @Input({transform: booleanAttribute}) selectable: boolean = false;
  @Input() selectMode: 'single' | 'multiple' = 'single';
  @Input({transform: booleanAttribute}) enableRowClick: boolean = false;
  @Input() pageSize: number = 10;
  @Input() queryMode: 'local' /*| 'remote'*/ = 'local';
  @Input({transform: booleanAttribute}) loading: boolean = false;

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

  private _selectedRows: any[] = [];
  private _columnDefinitions: ColumnDefinition[] = [];
  protected _visibleColumns: ColumnDefinition[] = [];
  protected currentPage: number = 0;
  protected _filters: FilterDefinition[] = [];
  protected _filtersInPopup: FilterDefinition[] = [];
  protected filterOperators: SelectItem[] = [
    {label: 'Equals', value: 'equals'},
    {label: 'Contains', value: 'contains'},
    {label: 'Starts with', value: 'startsWith'},
    {label: 'Ends with', value: 'endsWith'},
  ];

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

  protected _sortColumn: { field: string; direction: 'asc' | 'desc' } | null = null;

  get filteredData(): any[] {
    let filteredData = [...this.data];

    if (this._filters.length) {
      filteredData = filteredData.filter(row => {
        return this._filters.every(filter => {
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

    return filteredData;
  }

  get filteredAndSortedData(): any[] {
    let filteredData = this.filteredData;
    let sort = this._sortColumn;

    if (sort) {
      filteredData = filteredData.sort((a, b) => {
        const aValue = a[sort.field];
        const bValue = b[sort.field];

        if (aValue < bValue) return sort.direction === 'asc' ? -1 : 1;
        if (aValue > bValue) return sort.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }

    return filteredData.slice(this.currentPage * this.pageSize, (this.currentPage + 1) * this.pageSize);
  }

  handlePageChange(page: number): void {
    this.currentPage = page;
  }

  get sortIcon(): string {
    return this._sortColumn?.direction === 'asc' ? 'arrow-up' : 'arrow-down';
  }

  isSortable(column: ColumnDefinition): boolean {
    return column.sortable ?? this.defaultColumnDefinition.sortable ?? false;
  }

  toggleSort(column: ColumnDefinition): void {
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
  }

  handleChange(checked: boolean, row: any): void {
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

  isChecked(row: any) {
    if (this.selectMode === 'single') {
      return this.selectedRows[0] === row;
    } else if (this.selectMode === 'multiple') {
      return this.selectedRows.includes(row)
    }

    return false;
  }

  selectAll(checked: boolean): void {
    if (checked) {
      this.selectedRows = [...this.data];
    } else {
      this.selectedRows = [];
    }
  }

  isAllChecked(): boolean {
    return this.data.length > 0 && this.data.every(row => this.isChecked(row));
  }

  toggleColumnVisibility(column: ColumnDefinition): void {
    let visibleColumns = this._visibleColumns;
    let visible = visibleColumns.includes(column);

    if (visible) {
      visibleColumns = visibleColumns.filter(col => col !== column);
    } else {
      visibleColumns = [...visibleColumns, column];
    }

    this._visibleColumns = this.columnDefinitions.filter(col => visibleColumns.includes(col));
  }

  filterableColumns(): SelectItem[] {
    return this.columnDefinitions
      .filter(column =>column.filterable ?? this.defaultColumnDefinition.filterable ?? false)
      .map(column => ({
        label: column.headerName ?? column.field,
        value: column.field,
      }));
  }

  addFilter(): void {
    this._filtersInPopup.push({
      column: undefined,
      operator: 'equals',
      value: '',
    });
  }

  removeFilter($index: number) {
    this._filtersInPopup = this._filtersInPopup.filter((_, index) => index !== $index);

    if (this._filtersInPopup.length === 0) {
      this.addFilter();
    }
  }

  openFiltersModal() {
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

  saveFilters() {
    this._filters = [...this._filtersInPopup.filter(f => f.column && f.operator && f.value).map(filter => ({
      column: filter.column,
      operator: filter.operator,
      value: filter.value,
    }))];
    this.filtersModal.close();
  }
}
