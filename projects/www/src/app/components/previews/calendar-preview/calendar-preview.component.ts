import { Component } from '@angular/core';
import {PreviewComponent} from "../../../models/preview-component";
import {FormField} from "../../../models/form-field";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-calendar-preview',
  standalone: false,
  template: `
    <div class="pt-20">
        <dui-calendar [min]="min" [max]="max" />
    </div>
  `,
  styles: ``
})
export class CalendarPreviewComponent implements PreviewComponent {

  fields: FormField[] = [{
    name: 'min',
    type: 'date',
    default: new Date()
  }, {
    name: 'max',
    type: 'date',
    default: undefined
  }];

  min: any;
  max: any;

  get codeSnippet(): string {
    const datePipe = new DatePipe('en-US');
    return `<dui-calendar`
      + (this.min ? `\n  [min]="'${datePipe.transform(this.min, 'dd/MM/yyy')}' | date"` : '')
      + (this.max ? `\n  [max]="'${datePipe.transform(this.max, 'dd/MM/yyy')}' | date"` : '')
    + `\n/>`
  }

}
