import {booleanAttribute, Component, Input,} from '@angular/core';
import {BaseColumnDefinition, ColumnDefinition} from '../../../models/table/column-definition';
import {TableRowComponent} from '../table-row/table-row.component';
import {NgClass} from '@angular/common';
import {LucideAngularModule} from 'lucide-angular';
import {CheckboxComponent} from "../../checkbox/checkbox.component";
import {PaginationComponent} from "../../pagination/pagination.component";

@Component({
  selector: 'dui-table',
  standalone: true,
  imports: [NgClass, LucideAngularModule, TableRowComponent, CheckboxComponent, PaginationComponent],
  template: `
    <div class="flex flex-col w-full h-full gap-2">
      <table class="w-full">
        <thead class="bg-primary text-primary-foreground flex flex-row rounded-tr-2xl rounded-tl-2xl">
          @if (selectable) {
            <th>
              <div class="flex items-center justify-center w-12 h-full">
                <dui-checkbox/>
              </div>
            </th>
          }
          @for (header of columnDefinitions; track $index) {
            <th [ngClass]="header.headerClass"
                [style.width.px]="header.width"
                class="flex w-full items-center justify-between px-4 py-2 transition-colors duration-300 select-none h-12"
                [class.cursor-pointer]="isSortable(header)"
                (click)="toggleSort(header)">
            <span class="flex items-center gap-2">
              {{ header.headerName ?? header.field }}
              @if (isSortable(header) && _sortColumn?.field === header.field) {
                <i-lucide [name]="sortIcon" size="18"/>
              }
            </span>
              <div class="flex items-center">
                @if (isFilterable(header)) {
                  <button (click)="$event.stopPropagation()" class="cursor-pointer">
                    <i-lucide name="filter" size="18"/>
                  </button>
                }
              </div>
            </th>
          }
        </thead>
        <tbody class="flex flex-col">
          @for (row of data; track $index) {
            <dui-table-row [rowData]="row" [columnDefinitions]="columnDefinitions"
                           [rowHeight]="rowHeight" [selectable]="selectable"></dui-table-row>
          }

          @if (!data.length) {
            <tr class="flex w-full text-accent-foreground bg-accent">
              <td class="flex items-center justify-center w-full px-4 py-2 gap-2"
                  [colSpan]="columnDefinitions.length"
                  [style.height.px]="rowHeight">
                <i-lucide name="triangle-alert"/>
                Aucun résultat
              </td>
            </tr>
          }
        </tbody>
      </table>
      <dui-pagination pageSize="10" currentPage="0" total="10000"/>
    </div>
  `,
})
export class TableComponent {

  @Input() columnDefinitions: ColumnDefinition[] = [];

  private _defaultColumnDefinition: BaseColumnDefinition = {
    sortable: true,
    filterable: true,
  };

  @Input()
  set defaultColumnDefinition(value: BaseColumnDefinition) {
    this._defaultColumnDefinition = {
      ...this._defaultColumnDefinition,
      ...value
    }
  }

  get defaultColumnDefinition(): BaseColumnDefinition {
    return this._defaultColumnDefinition;
  }

  @Input() rowHeight: number = 50;
  @Input() data: any[] = [];
  @Input({transform: booleanAttribute}) selectable: boolean = false;

  protected _sortColumn: { field: string; direction: 'asc' | 'desc' } | null = null;

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
        default:
          this._sortColumn.direction = 'asc';
      }
    } else {
      this._sortColumn = {field: column.field, direction: 'asc'};
    }
  }
}
