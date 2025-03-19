import {Component, ComponentRef, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {FormField} from "../../models/form-field";
import {PreviewComponent} from "../../models/preview-component";
import {debounceTime, Subject} from "rxjs";
import {SelectItem, ComboboxItem, cn} from "dorvak-ui";
import {CopyButtonComponent} from "../copy-button/copy-button.component";
import {PROSE_CLASS} from "../../utils/utils";

@Component({
  selector: 'app-component-showcase',
  standalone: false,
  templateUrl: './component-showcase.component.html',
  styles: ``
})
export class ComponentShowcaseComponent implements OnInit {

  @ViewChild('preview', {static: true, read: ViewContainerRef})
  preview!: ViewContainerRef;

  generatedComponent: ComponentRef<PreviewComponent> | undefined;
  formFields: FormField[] = [];
  copied: boolean = false;
  copyMessageDelay: Subject<void> = new Subject<void>();

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

    this.copyMessageDelay.pipe(
      debounceTime(2000),
    ).subscribe(() => {
      this.copied = false;
    });
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

  asAny(items: ComboboxItem[] | SelectItem[] | undefined): any[] {
    if (!items) {
      return [];
    }
    return items as any[];
  }

  copyCodeSnippet() {
    const codeSnippet = this.generatedComponent?.instance.codeSnippet ?? '';
    this.copied = true;
    this.copyMessageDelay.next();
    navigator.clipboard.writeText(codeSnippet).then(() => {
      console.log('Code snippet copied to clipboard');
    }).catch(err => {
      console.error('Could not copy code snippet: ', err);
    });
  }

  protected readonly cn = cn;
  protected readonly CopyButtonComponent = CopyButtonComponent;
  protected readonly PROSE_CLASS = PROSE_CLASS;
}
