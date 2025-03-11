import {
  booleanAttribute,
  Component,
  EventEmitter,
  Input,
  numberAttribute,
  Output,
  ViewEncapsulation
} from '@angular/core';
import {ButtonComponent} from "../button/button.component";
import {cn} from "../../utils/utils";

@Component({
  selector: 'dui-pagination',
  encapsulation: ViewEncapsulation.None,
  imports: [
    ButtonComponent
  ],
  template: `
    @if (totalPages > 1) {
      <div [class]="cn('flex items-center gap-4 py-2 px-10 flex-wrap', showItemsCount ? 'md:justify-between justify-center' : 'justify-center')">
        @if (showItemsCount) {
          <div class="text-sm text-gray-500">
            Showing {{ currentPage * pageSize + 1 }} to {{ Math.min((currentPage + 1) * pageSize, totalItems) }} of {{ totalItems }} results
          </div>
        }
        <div class="flex items-center gap-2">
          <dui-button variant="ghost" size="icon" (click)="handlePageChange(0)" icon="chevrons-left" [disabled]="currentPage === 0"/>
          <dui-button variant="ghost" size="icon" (click)="handlePageChange(this.currentPage - 1)" icon="chevron-left" [disabled]="currentPage === 0"/>

          @for (page of getPagesToShow(); track page) {
            @if (page === -1) {
              <div class="h-10 w-10 px-4 py-2 text-foreground select-none">...</div>
            } @else {
              <dui-button [variant]="currentPage === page ? 'primary' : 'ghost'" size="icon" (click)="handlePageChange(page)" [disabled]="currentPage === page">{{ page + 1 }}</dui-button>
            }
          }

          <dui-button variant="ghost" size="icon" (click)="handlePageChange(this.currentPage + 1)" icon="chevron-right" [disabled]="currentPage === totalPages - 1"/>
          <dui-button variant="ghost" size="icon" (click)="handlePageChange(totalPages - 1)" icon="chevrons-right" [disabled]="currentPage === totalPages - 1"/>
        </div>
      </div>
    }
  `
})
export class PaginationComponent {

  @Input({ transform: numberAttribute }) totalItems: number = 0;
  @Input({ transform: numberAttribute }) totalPages: number = 0;
  @Input({ transform: numberAttribute }) pageSize: number = 10;
  @Input({ transform: numberAttribute }) currentPage: number = 0;
  @Input({ transform: booleanAttribute }) showItemsCount: boolean = true;

  @Output() pageChange = new EventEmitter<number>();

  handlePageChange(page: number) {
    this.currentPage = page;
    this.pageChange.emit(page);
  }

  getPagesToShow(): number[] {
    const pages: number[] = [];

    if (this.totalPages <= 7) {
      for (let i = 0; i < this.totalPages; i++) {
        pages.push(i);
      }

      return pages;
    }

    if (this.currentPage < 4) {
      for (let i = 0; i < 5; i++) {
        pages.push(i);
      }

      pages.push(-1);
      pages.push(this.totalPages - 1);

      return pages;
    }

    if (this.currentPage > this.totalPages - 5) {
      pages.push(0);
      pages.push(-1);

      for (let i = this.totalPages - 5; i < this.totalPages; i++) {
        pages.push(i);
      }

      return pages;
    }

    pages.push(0);
    pages.push(-1);

    for (let i = this.currentPage - 1; i <= this.currentPage + 1; i++) {
      pages.push(i);
    }

    pages.push(-1);
    pages.push(this.totalPages - 1);

    return pages;
  }

  protected readonly Math = Math;
  protected readonly cn = cn;
}
