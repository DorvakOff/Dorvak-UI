import {
  booleanAttribute,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  numberAttribute,
  Output,
  ViewChild
} from '@angular/core';
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from "@angular/forms";
import {cn, uniqueId} from "../../utils/utils";

@Component({
  selector: 'dui-textarea',
  imports: [
    FormsModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: TextareaComponent
    }
  ],
  host: {
    class: 'group',
  },
  template: `
    <div class="flex flex-col gap-1">
      @if (label) {
        <label [class]="cn('w-fit text-sm font-medium leading-none flex gap-1 select-none', disabled && 'cursor-not-allowed opacity-70')" [for]="id">
          {{ label }}
          @if (required) {
            <span class="text-red-500">*</span>
          }
        </label>
      }
      <textarea #input
        class="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm group-[.ng-invalid:not(.ng-pristine)]:border-destructive group-[.ng-invalid:not(.ng-pristine)]:focus-within:border-destructive"
        [placeholder]="placeholder"
        [disabled]="disabled"
        [attr.id]="id"
        [name]="name"
        [readonly]="readonly"
        [required]="required"
        [rows]="rows"
        [cols]="cols"
        [(ngModel)]="value"
      ></textarea>
    </div>
  `,
  styles: ``
})
export class TextareaComponent implements ControlValueAccessor {

  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() name: string = '';
  @Input({ transform: booleanAttribute }) disabled: boolean = false;
  @Input({ transform: booleanAttribute }) readonly: boolean = false;
  @Input({ transform: booleanAttribute }) required: boolean = false;
  @Input({ transform: numberAttribute }) rows: number = 3;
  @Input({ transform: numberAttribute }) cols: number = 20;

  @ViewChild('input') input!: ElementRef<HTMLTextAreaElement>;

  readonly id: string = uniqueId('dui-textarea');
  protected _touched: boolean = false;
  private onTouched = () => {
  };
  private _value: string = '';

  @Input()
  set value(value: string) {
    this.markAsTouched();
    this._value = value;
    this.valueChange.emit(value);
  }

  get value(): string {
    return this._value;
  }

  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  markAsTouched() {
    if (!this._touched) {
      this.onTouched();
      this._touched = true;
    }
  }

  writeValue(obj: any) {
    this.value = obj;
    this._touched = false;
  }

  registerOnChange(fn: any) {
    this.valueChange.subscribe(fn);
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  focus() {
    this.input.nativeElement.focus();
  }

  protected readonly cn = cn;
}
