import {booleanAttribute, Component, EventEmitter, Input, Output,} from '@angular/core';
import {BaseColumnDefinition, ColumnDefinition} from '../../../models/table/column-definition';
import {TableRowComponent} from '../table-row/table-row.component';
import {LucideAngularModule} from 'lucide-angular';
import {CheckboxComponent} from "../../checkbox/checkbox.component";
import {PaginationComponent} from "../../pagination/pagination.component";
import {TableHeaderComponent} from "../table-header/table-header.component";
import {ButtonComponent} from "../../button/button.component";

@Component({
  selector: 'dui-table',
  standalone: true,
  imports: [LucideAngularModule, TableRowComponent, CheckboxComponent, PaginationComponent, TableHeaderComponent, ButtonComponent],
  template: `
    <div class="flex flex-col w-full h-full gap-2">
      <div class="flex items-center justify-between gap-2 w-full">
        <div class="flex items-center gap-2 w-full">
          <ng-content select="[slot=actions]"/>
        </div>
        <div class="flex items-center gap-2">
          <dui-button variant="outline" icon="sliders-horizontal">
            Filters
          </dui-button>
          <dui-button size="icon" icon="settings"/>
        </div>
      </div>
      <table class="w-full">
        <thead class="flex flex-row rounded-tr-2xl rounded-tl-2xl">
          @if (selectable) {
            <th class="bg-muted text-primary rounded-tl-2xl">
              <div class="flex items-center justify-center w-12 h-full">
                @if (selectMode === 'multiple') {
                  <dui-checkbox (checkedChange)="selectAll($event)" [checked]="isAllChecked()"/>
                }
              </div>
            </th>
          }
          @for (header of columnDefinitions; track $index) {
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
                  [colSpan]="columnDefinitions.length"
                  [style.height.px]="rowHeight">
                <i-lucide name="loader-circle" class="animate-spin text-primary"/>
              </td>
            </tr>
          } @else {
            @for (row of filteredAndSortedData; track $index) {
              <dui-table-row [rowData]="row" [columnDefinitions]="columnDefinitions"
                             [rowHeight]="rowHeight" [selectable]="selectable" [selectMode]="selectMode"
                             (checkedChange)="handleChange($event, row)" [checked]="isChecked(row)"
                             [enableRowClick]="enableRowClick"
                             (rowClick)="rowClick.emit(row)"
              />
            }
            @if (!data.length) {
              <tr class="flex w-full text-accent-foreground bg-accent">
                <td class="flex items-center justify-center w-full px-4 py-2 gap-2"
                    [colSpan]="columnDefinitions.length"
                    [style.height.px]="rowHeight">
                  <i-lucide name="search-x" class="text-primary"/>
                  <span class="text-primary">No data available</span>
                </td>
              </tr>
            }
          }
        </tbody>
      </table>
      <dui-pagination [pageSize]="pageSize" [currentPage]="currentPage" [total]="data.length"
                      (pageChange)="handlePageChange($event)"/>
    </div>
  `,
})
export class TableComponent {

  @Output() selectedRowsChange: EventEmitter<any[]> = new EventEmitter<any[]>();
  @Output() rowClick: EventEmitter<any> = new EventEmitter<any>();

  @Input() columnDefinitions: ColumnDefinition[] = [];
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
  protected currentPage: number = 0;

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

  get filteredAndSortedData(): any[] {
    let filteredData = [...this.data];
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

  isFilterable(column: ColumnDefinition): boolean {
    return column.filterable ?? this.defaultColumnDefinition.filterable ?? false;
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
}
