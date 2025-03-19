import {
  AfterContentInit, booleanAttribute,
  Component,
  ContentChildren, EventEmitter, Input,
  Output,
  QueryList,
  ViewEncapsulation
} from '@angular/core';
import {RadioItemComponent} from "../radio-item/radio-item.component";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'dui-radio-group',
  imports: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: RadioGroupComponent,
      multi: true
    }
  ],
  template: `
    <div class="flex flex-col gap-2">
      @if (label) {
        <label class="block text-sm font-medium">{{ label }}</label>
      }
      <div class="flex flex-row gap-4 flex-wrap">
        <ng-content/>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None
})
export class RadioGroupComponent implements AfterContentInit, ControlValueAccessor {

  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  @Input() label: string = '';

  @Input()
  set value(value: string) {
    this._value = value;
    this.radioItems?.forEach(radio => radio.checked = radio.value === value);
    this.markAsTouched()
  }

  @Input({transform: booleanAttribute})
  set disabled(value: boolean) {
    this._disabled = value;
    this.radioItems?.forEach(radio => radio.disabled = value);
  }

  @ContentChildren(RadioItemComponent) radioItems?: QueryList<RadioItemComponent>

  private _disabled: boolean = false;
  private _value: string = '';
  private _touched: boolean = false;
  private onTouched = () => {};

  ngAfterContentInit() {
    this.radioItems?.forEach(radioItem => {
      radioItem.checkedChange.subscribe(checked => {
        if (checked) {
          this.radioItems?.filter(radio => radio !== radioItem).forEach(radio => radio.checked = false)
        }
        this.valueChange.emit(checked ? radioItem.value : '');
      })
    })

    if (this._value) {
      this.radioItems?.forEach(radio => radio.checked = radio.value === this._value);
    }

    this.radioItems?.forEach(radio => radio.disabled = this._disabled);
  }

  private markAsTouched() {
    if (!this._touched) {
      this.onTouched();
      this._touched = true;
    }
  }

  writeValue(obj: any) {
    this.value = obj;
    this._touched = false;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  registerOnChange(fn: any) {
    this.valueChange.subscribe(fn);
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

}
