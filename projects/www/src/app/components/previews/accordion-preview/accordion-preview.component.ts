import {Component} from '@angular/core';
import {PreviewComponent} from "../../../models/preview-component";
import {FormField} from '../../../models/form-field';

@Component({
  selector: 'app-accordion-preview',
  standalone: false,
  template: `
    <dui-accordion [multiple]="multiple">
      <dui-accordion-item [title]="titleAccordion1" [expanded]="accordion1Expanded">
        {{ contentAccordion1 }}
      </dui-accordion-item>
      <dui-accordion-item [title]="titleAccordion2" [expanded]="accordion2Expanded">
        {{ contentAccordion2 }}
      </dui-accordion-item>
    </dui-accordion>
  `,
  styles: ``
})
export class AccordionPreviewComponent implements PreviewComponent {

  fields: FormField[] = [
    {
      name: 'multiple',
      type: 'checkbox',
      label: 'Multiple',
      default: false,
    },
    {
      name: 'titleAccordion1',
      type: 'input',
      label: 'Title Accordion 1',
      default: 'Accordion 1',
    },
    {
      name: 'contentAccordion1',
      type: 'input',
      label: 'Content Accordion 1',
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: 'accordion1Expanded',
      type: 'checkbox',
      label: 'Accordion 1 Expanded',
      default: false,
    },
    {
      name: 'titleAccordion2',
      type: 'input',
      label: 'Title Accordion 2',
      default: 'Accordion 2',
    },
    {
      name: 'contentAccordion2',
      type: 'input',
      label: 'Content Accordion 2',
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: 'accordion2Expanded',
      type: 'checkbox',
      label: 'Accordion 2 Expanded',
      default: false,
    }
  ];

  multiple: any

  titleAccordion1: any;
  contentAccordion1: any;
  accordion1Expanded: any;

  titleAccordion2: any;
  contentAccordion2: any;
  accordion2Expanded: any

  get codeSnippet(): string {
    return `<dui-accordion${(this.multiple ? ' multiple' : '')}>`
      + `\n  <dui-accordion-item title="${this.titleAccordion1}"${this.accordion1Expanded ? ' expanded' : ''}>`
      + `\n    ${this.contentAccordion1}`
      + `\n  </dui-accordion-item>`
      + `\n  <dui-accordion-item title="${this.titleAccordion2}"${this.accordion2Expanded ? ' expanded' : ''}>`
      + `\n    ${this.contentAccordion2}`
      + `\n  </dui-accordion-item>`
      + `\n</dui-accordion>`;
  }

}
