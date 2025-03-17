import { Component } from '@angular/core';
import {PreviewComponent} from "../../../models/preview-component";
import {FormField} from "../../../models/form-field";

@Component({
  selector: 'app-tabs-preview',
  standalone: false,
  template: `
    <div class="w-full w-md">
      <dui-tabs [align]="align">
        <dui-tab [title]="titleTab1">
          {{ contentTab1 }}
        </dui-tab>
        <dui-tab [title]="titleTab2">
          {{ contentTab2 }}
        </dui-tab>
      </dui-tabs>
    </div>
  `,
  styles: ``
})
export class TabsPreviewComponent implements PreviewComponent {

  fields: FormField[] = [
    {
      name: 'align',
      type: 'select',
      default: 'left',
      items: [
        {value: 'left', label: 'Left'},
        {value: 'center', label: 'Center'},
        {value: 'right', label: 'Right'},
      ]
    },
    {
      name: 'titleTab1',
      label: 'Title Tab 1',
      type: 'input',
      default: 'Tab 1'
    },
    {
      name: 'contentTab1',
      label: 'Content Tab 1',
      type: 'input',
      default: 'Content Tab 1'
    },
    {
      name: 'titleTab2',
      label: 'Title Tab 2',
      type: 'input',
      default: 'Tab 2'
    },
    {
      name: 'contentTab2',
      label: 'Content Tab 2',
      type: 'input',
      default: 'Content Tab 2'
    }
  ]

  align: any;
  titleTab1: any;
  contentTab1: any;
  titleTab2: any;
  contentTab2: any;

  get codeSnippet(): string {
    return `<dui-tabs align="${this.align}">`
      + `\n  <dui-tab title="${this.titleTab1}">`
      + `\n    ${this.contentTab1}`
      + `\n  </dui-tab>`
      + `\n  <dui-tab title="${this.titleTab2}">`
      + `\n    ${this.contentTab2}`
      + `\n  </dui-tab>`
      + `\n</dui-tabs>`;
  }

}
