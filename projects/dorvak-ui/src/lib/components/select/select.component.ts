import {
  booleanAttribute,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild, ViewEncapsulation,
} from '@angular/core';
import {InputComponent} from '../input/input.component';
import {cn, uniqueId} from "../../utils/utils";
import {Subject, throttleTime} from "rxjs";
import {LucideAngularModule} from "lucide-angular";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

export interface SelectItem {
  value: any;
  label: string;
}

@Component({
  selector: 'dui-select',
  encapsulation: ViewEncapsulation.None,
  imports: [
    InputComponent,
    LucideAngularModule,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SelectComponent,
      multi: true
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
      <div class="relative">
        <dui-input [id]="id" [inputClass]="inputClass" [disabled]="disabled" [required]="required" [placeholder]="placeholder" [value]="getLabel(selected)" readonly icon="chevron-down" class="cursor-pointer" (click)="handleInputClick($event)" (keydown.enter)="handleInputClick($event)" #input/>
          <div [class]="cn(
                'absolute top-10 left-0 w-full bg-popover text-popover-foreground border border-gray-300 rounded-md shadow-md p-2 duration-300 z-10',
                showOnTop && 'bottom-10 top-auto'
              )"
               [class.hidden]="!visible && !dismissing"
               [class.animate-in]="visible" [class.fade-in-0]="visible" [class.animate-out]="dismissing" [class.fade-out-0]="dismissing"
               #combobox>
            <ul class="max-h-40 overflow-y-auto overscroll-contain [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-border">
              @for (item of items; track item.value) {
                <li [class]="cn('cursor-pointer flex justify-between items-center hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring ring-offset-background transition-all outline-none rounded-sm px-2 py-1', item.value === selected && 'bg-accent text-accent-foreground')"
                  (click)="onSelect(item); $event.stopPropagation()" tabindex="0" (keydown.enter)="onSelect(item)"
                >
                  <span>{{ item.label }}</span>
                  @if (item.value === selected) {
                    <i-lucide name="check" size="20" />
                  }
                </li>
              }
            </ul>
          </div>
      </div>
    </div>
  `,
  styles: `

  `
})
export class SelectComponent implements ControlValueAccessor {

  @Input() label: string = '';
  @Input() items: SelectItem[] = [];
  @Input() placeholder: string = 'Select...';
  @Input({ transform: booleanAttribute }) disabled: boolean = false;
  @Input({ transform: booleanAttribute }) required: boolean = false;
  @Input() inputClass: string = '';

  @Output() selectedChange: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('combobox') combobox!: ElementRef<HTMLDivElement>;
  @ViewChild('input') input!: InputComponent;

  readonly id: string = uniqueId('dui-select');
  protected _selected: any;
  protected showOnTop: boolean = false;
  protected visible: boolean = false;
  protected dismissing: boolean = false
  protected _touched: boolean = false;
  private onTouched = () => {
  };

  private scrollThrottle: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.scrollThrottle.pipe(
      throttleTime(100)
    ).subscribe(showOnTop => this.showOnTop = showOnTop);
  }

  @Input()
  set selected(value: any) {
    this.markAsTouched();
    this._selected = value;
    this.selectedChange.emit(value);
  }

  get selected(): any {
    return this._selected;
  }

  @HostListener('document:click', ['$event'])
  private onClick(event: MouseEvent) {
    if (this.visible && !this.combobox.nativeElement.contains(event.target as Node)) {
      this.closeCombobox();
    }
  }

  @HostListener('document:scroll')
  @HostListener('window:resize')
  private recalculatePosition() {
    if (this.visible) {
      // if the combobox is not visible on the screen, show it on top of the input
      this.scrollThrottle.next(window.innerHeight - this.input.input.nativeElement.getBoundingClientRect().bottom < this.combobox.nativeElement.clientHeight
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

  protected getLabel(value: any) {
    const item = this.items.find(item => item.value === value);
    return item ? item.label : '';
  }

  protected handleInputClick($event: Event) {
    $event.stopPropagation();

    if (!this.disabled) {
      if (this.visible) {
        this.closeCombobox();
      } else {
        this.openCombobox();
      }
    }
  }

  private openCombobox() {
    this.visible = true;
    this.dismissing = false;
    this.showOnTop = false;
    setTimeout(() => this.recalculatePosition());
  }

  private closeCombobox() {
    this.dismissing = true;

    setTimeout(() => {
      this.visible = false;
      this.dismissing = false
    }, 200);
  }

  protected onSelect(item: SelectItem) {
    this.selected = item.value;
    this.closeCombobox();
  }

  protected readonly cn = cn;

  private markAsTouched() {
    if (!this._touched) {
      this.onTouched();
      this._touched = true;
    }
  }

  writeValue(obj: any) {
    this.selected = obj || null;
    this._touched = false;
  }

  registerOnChange(fn: any) {
    this.selectedChange.subscribe(fn);
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }
}
