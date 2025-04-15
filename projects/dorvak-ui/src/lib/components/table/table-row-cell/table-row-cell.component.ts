import {
  Component,
  Input,
  Type,
  ViewEncapsulation
} from '@angular/core';
import {DatePipe, DecimalPipe, NgComponentOutlet, NgIf} from "@angular/common";
import {BaseColumnDefinition, ColumnDefinition} from "../../../models/table/column-definition";
import {ICellRendererOptions} from "../../../models/table/cell-renderer";

@Component({
  selector: 'dui-table-row-cell',
  imports: [
    NgIf,
    DecimalPipe,
    DatePipe,
    NgComponentOutlet
  ],
  encapsulation: ViewEncapsulation.None,
  template: `
    <ng-container *ngIf="isComponent(column.cellRenderer); else defaultCell">
      <ng-container [ngComponentOutlet]="getComponent()" [ngComponentOutletInputs]="{ params: getParams()}"/>
    </ng-container>

    <ng-template #defaultCell>
      @if (column.cellRenderer) {
        <div [innerHTML]="renderCell(column)"></div>
      } @else {
        <div>
          @switch (column.dataType ?? defaultColumnDefinition.dataType ?? 'string') {
            @case ('string') {
              {{ rowData[column.field] }}
            }
            @case ('number') {
              {{ rowData[column.field] | number }}
            }
            @case ('date') {
              {{ rowData[column.field] | date: (column.dateFormat ?? defaultColumnDefinition.dateFormat ?? 'dd/MM/YYYY') }}
            }
          }
        </div>
      }
    </ng-template>

  `,
  styles: ``
})
export class TableRowCellComponent {

  @Input() column!: ColumnDefinition;
  @Input() rowData: any;
  @Input() defaultColumnDefinition!: BaseColumnDefinition;

  renderCell(column: ColumnDefinition): any {
    return column.cellRenderer
      ? (column.cellRenderer as Function)({value: this.rowData[column.field]})
      : this.rowData[column.field];
  }

  isComponent(value: any): boolean {
    return typeof value === 'function' && value.prototype && value.prototype.constructor === value;
  }

  getComponent(): Type<any> {
    return this.column.cellRenderer as Type<any>;
  }

  getParams(): ICellRendererOptions {
    return {
      data: this.rowData,
      value: this.rowData[this.column.field],
      column: this.column,
      field: this.column.field
    }
  }
}
