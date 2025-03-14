import {Component, ComponentRef, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {icons} from 'lucide-angular';
import {ComboboxItem} from "../../../../../dorvak-ui/src/lib/components/combobox/combobox.component";
import {FormField} from "../../models/form-field";
import {SelectItem} from "../../../../../dorvak-ui/src/lib/components/select/select.component";

@Component({
  selector: 'app-component-showcase',
  standalone: false,
  templateUrl: './component-showcase.component.html',
  styles: ``
})
export class ComponentShowcaseComponent implements OnInit {

  @ViewChild('preview', {static: true, read: ViewContainerRef})
  preview!: ViewContainerRef;

  generatedComponent: ComponentRef<any> | undefined;
  formFields: FormField[] = [];

  @Input() component!: {
    name: string;
    previewComponent: any;
    id: string;
    since: string;
  };

  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = fb.group({})
  }

  ngOnInit() {
    this.preview.clear();
    this.renderPreview();
  }

  renderPreview() {
    this.generatedComponent = this.preview.createComponent(this.component.previewComponent);
    this.form = this.fb.group({})

    this.formFields = this.generatedComponent.instance.fields;

    for (let field of this.formFields) {
      this.form.addControl(field.name, this.fb.control(field.default));
    }

    // Set the form values based on the component instance
    for (let field of this.formFields) {
      this.generatedComponent!.instance[field.name] = field.default;
    }

    this.form.valueChanges.subscribe((value) => {
      if (!this.generatedComponent) {
        return;
      }

      for (let key in value) {
        if (value[key] !== undefined) {
          this.generatedComponent.instance[key] = value[key];
        }
      }
    })
  }

  getCodeSnippet() {
    if (!this.generatedComponent) {
      return '';
    }

    return  `\`\`\`html\n${this.generatedComponent.instance.codeSnippet}`;
  }

  getAvailableIcons(): ComboboxItem[] {
    return Object.keys(icons).map(icon => {
      return {
        label: icon,
        value: icon
      }
    });
  }

  asAny(items: ComboboxItem[] | SelectItem[] | undefined): any[] {
    if (!items) {
      return [];
    }
    return items as any[];
  }
}
