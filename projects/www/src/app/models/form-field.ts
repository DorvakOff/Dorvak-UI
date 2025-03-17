import {ComboboxItem} from "../../../../dorvak-ui/src/lib/components/combobox/combobox.component";
import {SelectItem} from "../../../../dorvak-ui/src/lib/components/select/select.component";

export type FormField = {
  name: string;
  type: 'input' | 'textarea' | 'select' | 'combobox' | 'checkbox' | 'date';
  label?: string;
  default : any;
  items?: ComboboxItem[] | SelectItem[];
}
