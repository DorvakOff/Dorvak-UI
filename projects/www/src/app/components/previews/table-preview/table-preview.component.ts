import { Component } from '@angular/core';
import {ColumnDefinition} from "dorvak-ui";
import {PreviewComponent} from "../../../models/preview-component";
import {FormField} from "../../../models/form-field";

@Component({
  selector: 'app-table-preview',
  standalone: false,
  template: `
    <div class="pt-25">
      <dui-table
         [pageSize]="5"
         [columnDefinitions]="columnDefinitions"
         [data]="tableData"
         [enableRowClick]="enableRowClick"
         [selectable]="selectable"
         [selectMode]="selectMode"
      />
    </div>
  `,
  styles: ``
})
export class TablePreviewComponent implements PreviewComponent {

  fields: FormField[] = [
    {
      name: 'enableRowClick',
      label: 'Enable Row Click',
      type: 'checkbox',
      default: false
    },
    {
      name: 'selectable',
      label: 'Selectable',
      type: 'checkbox',
      default: false
    },
    {
      name: 'selectMode',
      label: 'Select Mode',
      type: 'select',
      items: [
        {label: 'Single', value: 'single'},
        {label: 'Multiple', value: 'multiple'}
      ],
      default: 'single'
    }
  ]

  enableRowClick: any;
  selectable: any;
  selectMode: any;

  columnDefinitions: ColumnDefinition[] = [
    {field: 'name', headerName: 'Name'},
    {field: 'age', headerName: 'Age', cellRenderer: (params: any) => `${params.value} years old`, dataType: 'number'},
    {field: 'address', headerName: 'Address'},
  ]

  get tableData(): any[] {
    const itemCount = 20;

    return Array.from({length: itemCount}, (_, i) => ({
      name: `Name ${i}`,
      age: Math.floor(Math.random() * 100),
      address: `Address ${i}`,
    }));
  }

  get codeSnippet(): string {
    return `<!-- columnDefinitions and tableData are defined in the component class -->`
      + `\n<dui-table`
      + `\n  [columnDefinitions]="columnDefinitions"`
      + `\n  [data]="tableData"`
      + (this.enableRowClick ? `\n  enableRowClick` : '')
      + (this.selectable ? `\n  selectable` : '')
      + `\n  selectMode="${this.selectMode}"`
      + `\n/>`;
  }

}
