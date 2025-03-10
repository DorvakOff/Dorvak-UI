import {Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation} from '@angular/core';
import {LucideAngularModule} from "lucide-angular";
import {ColumnDefinition} from "../../../models/table/column-definition";
import {NgClass} from "@angular/common";
import {cn} from "../../../utils/utils";

@Component({
  selector: 'dui-table-header',
  imports: [
    LucideAngularModule,
    NgClass
  ],
  encapsulation: ViewEncapsulation.None,
  template: `
    <th (click)="handleClick($event)"
        [class]="cn(
            'flex w-full items-center justify-between px-4 py-2 transition-colors duration-300 select-none h-12 bg-muted text-primary',
            sortable && 'hover:bg-muted/70 cursor-pointer',
            isFistColumn && 'rounded-tl-2xl',
            isLastColumn && 'rounded-tr-2xl'
            )"
        [ngClass]="column.headerClass"
        [style.width.px]="column.width"
    >
      <span class="flex items-center gap-2">
        {{ column.headerName ?? column.field }}
        @if (sortable && isCurrentSort) {
          <i-lucide [name]="sortIcon" size="18"/>
        }
      </span>
    </th>
  `,
})
export class TableHeaderComponent {

  @Input() column!: ColumnDefinition;
  @Input() rowHeight: number = 50;
  @Input() isFistColumn: boolean = false;
  @Input() isLastColumn: boolean = false;
  @Input() sortable: boolean = false;
  @Input() isCurrentSort: boolean = false;
  @Input() sortIcon: string = 'arrow-up-down';

  @Output() sortChange: EventEmitter<void> = new EventEmitter<void>();

  @ViewChild('filterPopup', {read: ElementRef}) filterPopup!: ElementRef<HTMLElement>;

  protected visible: boolean = false;
  protected readonly cn = cn;

  handleClick(event: MouseEvent): void {
    if (!this.sortable) return;
    event.stopPropagation();
    this.sortChange.emit();
  }
}
