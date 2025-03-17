import { Component } from '@angular/core';
import {PreviewComponent} from "../../../models/preview-component";
import {FormField} from "../../../models/form-field";

@Component({
  selector: 'app-tooltip-preview',
  standalone: false,
  template: `
    <dui-tooltip [text]="text" [side]="side">
      {{ content }}
    </dui-tooltip>
  `,
  styles: ``
})
export class TooltipPreviewComponent implements PreviewComponent {

  fields: FormField[] = [
    {
      name: 'text',
      type: 'input',
      default: 'Hello There'
    },
    {
      name: 'side',
      type: 'select',
      items: [
        {value: 'top', label: 'Top'},
        {value: 'bottom', label: 'Bottom'},
        {value: 'left', label: 'Left'},
        {value: 'right', label: 'Right'}
      ],
      default: 'top'
    },
    {
      name: 'content',
      type: 'input',
      default: 'General Kenobi'
    }
  ]

  side: any;
  text: any;
  content: any;

  get codeSnippet(): string {
    return `<dui-tooltip`
      + `\n  text="${this.text}"`
      + `\n  side="${this.side}"`
      + `\n>`
      + `\n  ${this.content}`
      + `\n</dui-tooltip>`;
  }

}
