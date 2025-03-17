import { Component } from '@angular/core';
import {PreviewComponent} from "../../../models/preview-component";
import {FormField} from "../../../models/form-field";

@Component({
  selector: 'app-separator-preview',
  standalone: false,
  template: `
    <div class="w-40 h-40">
      <dui-separator [vertical]="vertical" />
    </div>
  `,
  styles: ``
})
export class SeparatorPreviewComponent implements PreviewComponent {

  fields: FormField[] = [
    {
      name: 'vertical',
      type: 'checkbox',
      default: false
    }
  ];

  vertical: any;

  get codeSnippet(): string {
    return `<dui-separator${this.vertical ? ' vertical' : ''}/>`;
  }

}
