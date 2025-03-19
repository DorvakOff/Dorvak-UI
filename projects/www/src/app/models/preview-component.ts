import {FormField} from "./form-field";
import {icons} from "lucide-angular";

export interface PreviewComponent {

  fields: FormField[];

  get codeSnippet (): string;

  [key: string]: any;

}

export interface PreviewWithTsSnippet extends PreviewComponent {
  get tsSnippet (): string;
}

export function availableIcons(): any[] {
  return Object.keys(icons).map(icon => {
    return {
      label: icon,
      value: icon
    }
  })
}
