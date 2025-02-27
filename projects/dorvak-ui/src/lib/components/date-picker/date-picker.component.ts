import {
  booleanAttribute,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild, ViewEncapsulation
} from '@angular/core';
import {InputComponent} from "../input/input.component";
import {LucideAngularModule} from "lucide-angular";
import {cn, uniqueId} from "../../utils/utils";
import {CalendarComponent} from "../calendar/calendar.component";
import {ControlValueAccessor} from "@angular/forms";
import {Subject, throttleTime} from "rxjs";
import {TitleCasePipe} from "@angular/common";

@Component({
  selector: 'dui-date-picker',
  encapsulation: ViewEncapsulation.None,
  imports: [
    InputComponent,
    LucideAngularModule,
    CalendarComponent,
    TitleCasePipe
  ],
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
      <div class="relative">
        <dui-input [id]="id" [disabled]="disabled" [required]="required" [placeholder]="placeholder" [value]="getInputLabel() | titlecase" readonly icon="calendar" class="cursor-pointer" (click)="handleInputClick($event)" (keydown.enter)="handleInputClick($event)" #input/>
        <div [class]="cn(
                'absolute top-10 left-0 duration-300 z-10',
                showOnTop && 'bottom-10 top-auto'
              )"
             [class.hidden]="!visible && !dismissing"
             [class.animate-in]="visible" [class.fade-in-0]="visible" [class.animate-out]="dismissing" [class.fade-out-0]="dismissing"
             #popup>
          <dui-calendar (valueChange)="value = $event; closeCombobox()" #calendar/>
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class DatePickerComponent implements ControlValueAccessor {

  @Input() label: string | undefined;
  @Input() placeholder: string = 'Select a date';
  @Input({ transform: booleanAttribute }) required: boolean = false;
  @Input({ transform: booleanAttribute }) disabled: boolean = false;

  @ViewChild('popup') popup!: ElementRef<HTMLDivElement>;
  @ViewChild('calendar') calendar!: CalendarComponent;
  @ViewChild('input') input!: InputComponent;

  protected visible: boolean = false;
  protected dismissing: boolean = false;
  protected showOnTop: boolean = false;
  protected _touched: boolean = false;
  private onTouched = () => {
  };
  protected id: string = uniqueId('dui-date-picker');
  private _value: Date | undefined;
  private scrollThrottle: Subject<boolean> = new Subject<boolean>();

  @Input()
  set value(value: Date | undefined) {
    this.markAsTouched();
    this._value = value;
    this.valueChange.emit(value);
  }

  get value(): Date | undefined {
    return this._value;
  }

  getInputLabel(): string {
    return this.value ? this.value.toLocaleDateString('default', {weekday: 'short', day: 'numeric', month: 'short', year: 'numeric'}) : '';
  }

  constructor() {
    this.scrollThrottle.pipe(
      throttleTime(100)
    ).subscribe(showOnTop => this.showOnTop = showOnTop);
  }

  @Output() valueChange: EventEmitter<Date> = new EventEmitter<Date>();

  protected readonly cn = cn;

  @HostListener('document:click', ['$event'])
  private onClick(event: MouseEvent) {
    if (this.visible && !this.popup.nativeElement.contains(event.target as Node)) {
      this.closeCombobox();
    }
  }

  @HostListener('document:scroll')
  @HostListener('window:resize')
  recalculatePosition() {
    if (this.visible) {
      // if the combobox is not visible on the screen, show it on top of the input
      this.scrollThrottle.next(window.innerHeight - this.input.input.nativeElement.getBoundingClientRect().bottom < this.popup.nativeElement.clientHeight
        + 50);
    }
  }

  @HostListener('keydown.escape', ['$event'])
  private onEscape($event: KeyboardEvent) {
    if (this.visible) {
      this.closeCombobox();
      $event.stopPropagation();
    }
  }

  handleInputClick($event: Event) {
    $event.stopPropagation();

    if (!this.disabled) {
      if (this.visible) {
        this.closeCombobox();
      } else {
        this.openCombobox();
      }
    }
  }

  openCombobox() {
    this.visible = true;
    this.dismissing = false;
    this.showOnTop = false;
    setTimeout(() => {
      this.calendar.button.focus();
      this.recalculatePosition();
    });
  }

  closeCombobox() {
    this.dismissing = true;

    setTimeout(() => {
      this.visible = false;
      this.dismissing = false
    }, 200);
  }

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
