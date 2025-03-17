import { Component } from '@angular/core';
import {PreviewComponent} from "../../../models/preview-component";
import {FormField} from "../../../models/form-field";

@Component({
  selector: 'app-input-otp-preview',
  standalone: false,
  template: `
    <dui-input-otp [label]="label"/>
  `,
  styles: ``
})
export class InputOtpPreviewComponent implements PreviewComponent {

  fields: FormField[] = [
    {
      name: 'label',
      type: 'input',
      default: 'Enter your One Time Password'
    }
  ];

  label: any;

  get codeSnippet(): string {
    return `<dui-input-otp label="${this.label}"/>`;
  }

}
