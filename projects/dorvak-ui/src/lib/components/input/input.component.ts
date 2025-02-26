import {
  booleanAttribute,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  numberAttribute,
  OnInit,
  Output, ViewChild,
} from '@angular/core';
import {cn, uniqueId} from "../../utils/utils";
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from "@angular/forms";
import {LucideAngularModule} from "lucide-angular";
import {LucideIconNode} from "lucide-angular/icons/types";

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
    <div class="flex flex-col gap-1">
      @if (label) {
        <label [class]="cn('w-fit text-sm font-medium leading-none flex gap-1 select-none', disabled && 'cursor-not-allowed opacity-70')" [for]="id">
          {{ label }}
          @if (required) {
            <span class="text-red-500">*</span>
          }
        </label>
      }
      <div class="flex items-center">
      <div
        (click)="focus()"
        [class.no-arrows]="hideArrows"
        [class]="cn(
          'form-control flex items-center gap-1 h-9 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground md:text-sm focus-within:border-primary',
          disabled && 'cursor-not-allowed bg-muted text-muted-foreground',
          !disableErrorBorder && 'group-[.ng-invalid:not(.ng-pristine)]:border-destructive group-[.ng-invalid:not(.ng-pristine)]:focus-within:border-destructive',
          iconPosition === 'left' && 'flex-row-reverse',
          inputClass
        )">
        <input
          #input
          class="border-none bg-transparent w-full focus-visible:outline-none cursor-[inherit]"
          [disabled]="disabled"
          [type]="_type"
          [placeholder]="placeholder"
          [attr.id]="id"
          [name]="name"
          [autocomplete]="autocomplete"
          [required]="required"
          [min]="min"
          [pattern]="pattern"
          [max]="max"
          [maxlength]="maxlength"
          [(ngModel)]="value"
          [readonly]="readonly"
          (ngModelChange)="valueChange.emit($event)"
        />
        @if (icon) {
          @if (iconClick) {
            <button type="button" (click)="handleIconClick($event)" class="hover:text-primary rounded-md text-muted-foreground duration-300 cursor-[inherit] focus-visible:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background transition-all outline-none">
              <i-lucide [name]="icon" size="16"/>
            </button>
          } @else {
            <span class="text-muted-foreground">
                <i-lucide [name]="icon" size="16"/>
            </span>
          }
        }
      </div>
        <ng-content/>
      </div>
    </div>
  `,
  styles: [`
    .no-arrows {
      -moz-appearance: textfield;

      ::-webkit-inner-spin-button,
      ::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
  `]
})
export class InputComponent implements ControlValueAccessor, OnInit {

  @Input() label: string = '';
  @Input() type: string = 'text';
  _type: string = 'text';
  @Input() placeholder: string = '';
  @Input() id: string = uniqueId('dui-input');
  @Input() pattern: string = '';
  @Input() maxlength: string | number | null = null;
  @Input() name: string = '';
  @Input() icon: string | LucideIconNode[] | undefined;
  @Input() iconPosition: 'left' | 'right' = 'right';
  @Input() autocomplete: string = 'off';
  @Input({transform: booleanAttribute}) valid: boolean = true;
  @Input({transform: numberAttribute}) min: number | undefined;
  @Input({transform: numberAttribute}) max: number | undefined;
  @Input({transform: booleanAttribute}) disabled: boolean = false;
  @Input({transform: booleanAttribute}) required: boolean = false;
  @Input({transform: booleanAttribute}) readonly: boolean = false;
  @Input({transform: booleanAttribute}) hideArrows: boolean = false;
  @Input() inputClass = '';
  @Input({transform: booleanAttribute}) disableErrorBorder: boolean = false;

  @ViewChild('input') input!: ElementRef<HTMLInputElement>;

  protected _touched: boolean = false;
  private onTouched = () => {
  };
  private _value: string = '';

  ngOnInit() {
    this._type = this.type;

    if (this.type === 'password' && !this.icon) {
      this.icon = 'eye';
      this.iconClick = () => {
        this._type = this._type === 'password' ? 'text' : 'password';
        this.icon = this._type === 'password' ? 'eye' : 'eye-off';
      }
    }
  }

  handleIconClick($event: MouseEvent) {
    if (this.iconClick) {
      this.iconClick();
      $event.stopPropagation()
    }
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
  @Output() iconClick: Function | undefined;

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

  focus() {
    this.input.nativeElement.focus();
  }
}
