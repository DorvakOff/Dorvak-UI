import {booleanAttribute, Component, EventEmitter, Input, Output} from '@angular/core';
import {ButtonComponent} from "../button/button.component";
import {cn} from "../../utils/utils";

@Component({
  selector: 'dui-pagination',
  imports: [
    ButtonComponent
  ],
  template: `
    @if (total > pageSize) {
      <div [class]="cn('flex items-center gap-4 py-2 px-10 flex-wrap', showItemsCount ? 'md:justify-between justify-center' : 'justify-center')">
        @if (showItemsCount) {
          <div class="text-sm text-gray-500">
            Showing {{ currentPage * pageSize + 1 }} to {{ Math.min((currentPage + 1) * pageSize, total) }} of {{ total }} results
          </div>
        }
        <div class="flex items-center space-x-2">
          <dui-button variant="ghost" size="icon" (click)="handlePageChange(0)" icon="chevron-left" [disabled]="currentPage === 0"/>

          @for (page of getPagesToShow(); track page) {
            <dui-button [variant]="currentPage === page ? 'primary' : 'ghost'" (click)="handlePageChange(page)" [disabled]="currentPage === page">{{ page + 1 }}</dui-button>
          }

          <dui-button variant="ghost" size="icon" (click)="handlePageChange(countPages() - 1)" icon="chevron-right" [disabled]="currentPage === countPages() - 1"/>
        </div>
      </div>
    }
  `
})
export class PaginationComponent {

  @Input() total: number = 0;
  @Input() pageSize: number = 10;
  @Input() currentPage: number = 0;
  @Input({ transform: booleanAttribute }) showItemsCount: boolean = true;

  @Output() pageChange = new EventEmitter<number>();

  handlePageChange(page: number) {
    this.currentPage = page;
    this.pageChange.emit(page);
  }

  countPages() {
    return Math.ceil(this.total / this.pageSize);
  }

  getPagesToShow() {
    const pages = [];

    const total = this.countPages();

    if (total <= 5) {
      for (let i = 0; i < total; i++) {
        pages.push(i);
      }
    } else if (this.currentPage < 2) {
      for (let i = 0; i < 5; i++) {
        pages.push(i);
      }
    } else if (this.currentPage > total - 3) {
      for (let i = total - 5; i < total; i++) {
        pages.push(i);
      }
    } else {
      for (let i = this.currentPage - 2; i < this.currentPage + 3; i++) {
        pages.push(i);
      }
    }

    return pages;
  }

  protected readonly Math = Math;
  protected readonly cn = cn;
}
