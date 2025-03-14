import {FormField} from "./form-field";

export interface PreviewComponent {

  fields: FormField[];

  get codeSnippet (): string;

}
