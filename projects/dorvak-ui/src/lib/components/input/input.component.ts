import {booleanAttribute, Component, EventEmitter, Input, numberAttribute, OnInit, Output,} from '@angular/core';
import {cn} from "../../utils/utils";
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from "@angular/forms";
import {LucideAngularModule} from "lucide-angular";

@Component({
  selector: 'dui-input',
  imports: [
    FormsModule,
    LucideAngularModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputComponent
    }
  ],
  host: {
    class: 'group',
  },
  template: `
    <div
      [class]="cn(
        'form-control flex items-center gap-1 h-9 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground md:text-sm focus-within:border-primary',
        disabled && 'cursor-not-allowed bg-muted text-muted-foreground',
        'group-[.ng-invalid:not(.ng-pristine)]:border-destructive group-[.ng-invalid:not(.ng-pristine)]:focus-within:border-destructive'
      )">
      <input
        class="border-none bg-transparent w-full focus-visible:outline-none disabled:cursor-not-allowed"
        [disabled]="disabled"
        [type]="_type"
        [placeholder]="placeholder"
        [id]="id"
        [name]="name"
        [autocomplete]="autocomplete"
        [required]="required"
        [min]="min"
        [max]="max"
        [(ngModel)]="value"
        [readonly]="readonly"
        (ngModelChange)="valueChange.emit($event)"
      />
      @if (type === 'password') {
        <button type="button" class="cursor-pointer" (click)="_type = _type === 'password' ? 'text' : 'password'">
          <i-lucide [name]="_type === 'password' ? 'eye-off' : 'eye' " size="16"/>
        </button>
      }
    </div>
  `
})
export class InputComponent implements ControlValueAccessor, OnInit {


  @Input() type: string = 'text';
  _type: string = 'text';
  @Input() placeholder: string = '';
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() autocomplete: string = 'off';
  @Input({transform: booleanAttribute}) valid: boolean = true;
  @Input({transform: numberAttribute}) min: number | undefined;
  @Input({transform: numberAttribute}) max: number | undefined;
  @Input({transform: booleanAttribute}) disabled: boolean = false;
  @Input({transform: booleanAttribute}) required: boolean = false;
  @Input({transform: booleanAttribute}) readonly: boolean = false;

  protected _touched: boolean = false;
  private onTouched = () => {
  };
  private _value: string = '';

  ngOnInit() {
    this._type = this.type;
  }

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

  protected readonly cn = cn;

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
}
