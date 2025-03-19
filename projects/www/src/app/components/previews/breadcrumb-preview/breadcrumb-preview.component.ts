import { Component } from '@angular/core';
import {PreviewComponent} from "../../../models/preview-component";
import {FormField} from "../../../models/form-field";
import {BreadcrumbItem} from "dorvak-ui";

@Component({
  selector: 'app-breadcrumb-preview',
  standalone: false,
  template: `
    <dui-breadcrumb [items]="items"/>
  `,
  styles: ``
})
export class BreadcrumbPreviewComponent implements PreviewComponent {

  fields: FormField[] = [];

  items: BreadcrumbItem[] = [
    {label: 'Home', url: '/'},
    {label: 'Docs', url: '/#/docs/'},
    {label: 'Components', url: '/#/docs/components/'},
    {label: 'Breadcrumb'}
  ];

  get codeSnippet(): string {
    return `<dui-breadcrumb`
      + `\n  [items]="[${this.items.map(this.mapBreadcrumbItem).join(', ')}]"`
      + `\n/>`;
  }

  mapBreadcrumbItem(item: BreadcrumbItem): string {
    return `{label: '${item.label}'${item.url ? `, url: '${item.url}'` : ''}}`;
  }

}
