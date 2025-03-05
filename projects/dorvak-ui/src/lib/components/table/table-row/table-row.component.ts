import {Component, Input} from '@angular/core';
import {ColumnDefinition} from '../../../models/table/column-definition';
import {NgClass} from '@angular/common';
import {TableRowCellComponent} from "../table-row-cell/table-row-cell.component";
import {CheckboxComponent} from "../../checkbox/checkbox.component";

@Component({
  selector: 'dui-table-row',
  standalone: true,
  imports: [NgClass, TableRowCellComponent, CheckboxComponent],
  template: `
    <tr
      class="select-none flex w-full hover:text-accent-foreground hover:bg-accent transition-colors duration-300 border-b-border border-b-2">
      @if (selectable) {
        <td>
          <div class="flex items-center justify-center w-12 h-full">
            <dui-checkbox/>
          </div>
        </td>
      }
      @for (column of columnDefinitions; track $index) {
        <td [ngClass]="column.cellClass"
            class="flex items-center w-full px-4 py-2"
            [style.height.px]="rowHeight">
          <dui-table-row-cell [column]="column" [rowData]="rowData"/>
        </td>
      }
    </tr>
  `,
})
export class TableRowComponent {

  @Input() rowData: any;
  @Input() columnDefinitions: ColumnDefinition[] = [];
  @Input() rowHeight: number = 50;
  @Input() selectable: boolean = false;

}
