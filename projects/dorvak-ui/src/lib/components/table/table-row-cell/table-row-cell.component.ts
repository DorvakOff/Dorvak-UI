import {
  Component,
  ComponentRef,
  Input,
  OnChanges,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {CellHostDirective} from "../../../directives/cell-host.directive";
import {DatePipe, DecimalPipe, NgIf} from "@angular/common";
import {BaseColumnDefinition, ColumnDefinition} from "../../../models/table/column-definition";
import {ICellRenderer} from "../../../models/table/cell-renderer";

@Component({
  selector: 'dui-table-row-cell',
  imports: [
    CellHostDirective,
    NgIf,
    DecimalPipe,
    DatePipe
  ],
  encapsulation: ViewEncapsulation.None,
  template: `
    <ng-container *ngIf="isComponent(column.cellRenderer); else defaultCell">
      <ng-container duiCellHost></ng-container>
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
export class TableRowCellComponent implements OnInit, OnChanges {

  @ViewChild(CellHostDirective, {static: false}) cellHost!: CellHostDirective;

  @Input() column!: ColumnDefinition;
  @Input() rowData: any;
  @Input() defaultColumnDefinition!: BaseColumnDefinition;

  ngOnInit(): void {
    setTimeout(() => {
      if (this.isComponent(this.column.cellRenderer)) {
        this.loadComponent(this.column.cellRenderer);
      }
    });
  }

  ngOnChanges() {
    setTimeout(() => {
      if (this.isComponent(this.column.cellRenderer)) {
        this.loadComponent(this.column.cellRenderer);
      }
    })
  }

  renderCell(column: ColumnDefinition): any {
    return column.cellRenderer
      ? (column.cellRenderer as Function)({value: this.rowData[column.field]})
      : this.rowData[column.field];
  }

  isComponent(value: any): boolean {
    return typeof value === 'function' && value.prototype && value.prototype.constructor === value;
  }

  loadComponent(component: any): void {
    if (!this.cellHost) return;

    const viewContainerRef = this.cellHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef: ComponentRef<ICellRenderer> = viewContainerRef.createComponent(component);
    componentRef.instance.duiInit({
      data: this.rowData,
      value: this.rowData[this.column.field],
      column: this.column,
      field: this.column.field
    });
  }
}
