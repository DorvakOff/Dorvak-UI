import { Component } from '@angular/core';
import {PreviewComponent} from "../../../models/preview-component";
import {FormField} from "../../../models/form-field";

@Component({
  selector: 'app-pagination-preview',
  standalone: false,
  template: `
    <dui-pagination
      [pageSize]="pageSize"
      [currentPage]="currentPage"
      [totalPages]="totalPages"
      [totalItems]="totalItems"
      [showItemsCount]="showItemsCount"
    />
  `,
  styles: ``
})
export class PaginationPreviewComponent implements PreviewComponent {

  fields: FormField[] = [
    {
      name: 'pageSize',
      label: 'Page Size',
      type: 'input',
      default: 10
    },
    {
      name: 'currentPage',
      label: 'Current Page',
      type: 'input',
      default: 1
    },
    {
      name: 'totalPages',
      label: 'Total Pages',
      type: 'input',
      default: 10
    },
    {
      name: 'totalItems',
      label: 'Total Items',
      type: 'input',
      default: 100
    },
    {
      name: 'showItemsCount',
      label: 'Show Items Count',
      type: 'checkbox',
      default: true
    }
  ];

  pageSize: any;
  currentPage: any;
  totalPages: any;
  totalItems: any;
  showItemsCount: any;

  get codeSnippet(): string {
    return `<dui-pagination`
      + `\n  pageSize="${this.pageSize}"`
      + `\n  currentPage="${this.currentPage}"`
      + `\n  totalPages="${this.totalPages}"`
      + `\n  totalItems="${this.totalItems}"`
      + (!this.showItemsCount ? '\n  showItemsCount="false"' : '')
      + `\n/>`;
  }

}
