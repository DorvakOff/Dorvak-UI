import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {ColumnDefinition} from '../../../models/table/column-definition';
import {NgClass} from '@angular/common';
import {TableRowCellComponent} from "../table-row-cell/table-row-cell.component";
import {CheckboxComponent} from "../../checkbox/checkbox.component";
import {cn} from "../../../utils/utils";
import {RadioComponent} from "../../radio/radio.component";

@Component({
  selector: 'dui-table-row',
  standalone: true,
  imports: [TableRowCellComponent, CheckboxComponent, NgClass, RadioComponent],
  encapsulation: ViewEncapsulation.None,
  template: `
    <tr
      class="select-none flex w-full hover:text-accent-foreground hover:bg-accent transition-colors duration-300 border-b-border border-b-2"
    >
      @if (selectable) {
        <td>
          <div class="flex items-center justify-center w-12 h-full">
            @if (selectMode === 'multiple') {
              <dui-checkbox [(checked)]="checked"/>
            } @else {
              <dui-radio [(checked)]="checked"/>
            }
          </div>
        </td>
      }
      @for (column of columnDefinitions; track $index) {
        <td [ngClass]="column.cellClass"
            class="flex items-center w-full px-4 py-2"
            [class.cursor-pointer]="$first && enableRowClick"
            [style.height.px]="rowHeight"
            (click)="enableRowClick ? rowClick.emit(rowData) : null"
        >
          <dui-table-row-cell [column]="column" [rowData]="rowData"
                              [class]="cn($first && enableRowClick && 'text-primary')"
          />
        </td>
      }
    </tr>
  `,
})
export class TableRowComponent {

  @Output() checkedChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() rowClick: EventEmitter<any> = new EventEmitter<any>();

  @Input() rowData: any;
  @Input() columnDefinitions: ColumnDefinition[] = [];
  @Input() rowHeight: number = 50;
  @Input() selectable: boolean = false;
  @Input() selectMode!: "single" | "multiple";
  @Input() enableRowClick: boolean = false;

  @Input()
  set checked(value: boolean) {
    this._checked = value;
    this.checkedChange.emit(value);
  }

  private _checked: boolean = false;

  get checked(): boolean {
    return this._checked;
  }

  protected readonly cn = cn;
}
