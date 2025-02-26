import {
  booleanAttribute,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input, OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {InputComponent} from '../input/input.component';
import {cn, uniqueId} from "../../utils/utils";
import {Subject, throttleTime} from "rxjs";
import {LucideAngularModule} from "lucide-angular";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

export interface ComboboxItem {
  value: any;
  label: string;
}

type SelectedType<Multi extends boolean> = Multi extends true ? ComboboxItem[] : ComboboxItem;

@Component({
  selector: 'dui-combobox',
  imports: [
    InputComponent,
    LucideAngularModule,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ComboboxComponent,
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
        <dui-input [id]="id" [inputClass]="inputClass" [disabled]="disabled" [required]="required" [placeholder]="placeholder" [value]="getValue()" readonly icon="chevron-down" class="cursor-pointer" (click)="handleInputClick($event)" (keydown.enter)="handleInputClick($event)" #input/>
          <div [class]="cn(
              'absolute top-10 left-0 w-full bg-popover text-popover-foreground border border-gray-300 rounded-md shadow-md p-2 duration-300 z-10',
              showOnTop && 'bottom-10 top-auto'
              )"
               [class.hidden]="!visible && !dismissing"
               [class.animate-in]="visible" [class.fade-in-0]="visible" [class.animate-out]="dismissing" [class.fade-out-0]="dismissing"
               #combobox>
            <dui-input class="w-full" placeholder="Search..." icon="search" iconPosition="left" [(value)]="_searchValue" #search disableErrorBorder/>
            <ul class="mt-2 max-h-40 overflow-y-auto overscroll-contain">
              @for (item of filteredItems; track item.value) {
                <li [class]="cn('cursor-pointer flex justify-between items-center hover:bg-accent hover:text-accent-foreground focus-within:bg-accent focus-within:text-accent-foreground rounded-sm px-2 py-1 outline-none', isSelected(item) && 'bg-accent text-accent-foreground')"
                  (click)="onSelect(item); $event.stopPropagation()" tabindex="0" (keydown.enter)="onSelect(item)"
                >
                  <span>{{ item.label }}</span>
                  @if (isSelected(item)) {
                    <i-lucide name="check" size="20" />
                  }
                </li>
              }
            </ul>
          </div>
      </div>
    </div>
  `,
  styles: ``
})
export class ComboboxComponent implements ControlValueAccessor, OnInit {

  @Input() label: string = '';
  @Input() items: ComboboxItem[] = [];
  @Input() placeholder: string = 'Select...';
  @Input({ transform: booleanAttribute }) disabled: boolean = false;
  @Input({ transform: booleanAttribute }) required: boolean = false;
  @Input({ transform: booleanAttribute }) multi = false;
  @Input() inputClass: string = '';

  @Output() selectedChange: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('combobox') combobox!: ElementRef<HTMLDivElement>;
  @ViewChild('search') search!: InputComponent;
  @ViewChild('input') input!: InputComponent;

  readonly id: string = uniqueId('dui-combobox');
  private _selected!: SelectedType<this['multi']>;
  protected _searchValue: string = '';
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

  ngOnInit() {
    this.selected = (this.multi ? [] : { value: null, label: '' }) as SelectedType<this['multi']>;
  }

  set selected(value: SelectedType<this['multi']>) {
    this.markAsTouched();
    this._selected = value;
    if (this.multi) {
      let selected = Array.isArray(value) ? value : [];
      this.selectedChange.emit(selected.map(item => item.value));
    } else {
      this.selectedChange.emit((value as ComboboxItem).value);
    }
  }

  get selected(): SelectedType<this['multi']> {
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
  recalculatePosition() {
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
    this._searchValue = '';
    this.showOnTop = false;
    setTimeout(() => {
      this.search.focus();
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

  get filteredItems(): ComboboxItem[] {
    return this.items.filter(item => item.label.toLowerCase().includes(this._searchValue.toLowerCase()));
  }

  protected onSelect(item: ComboboxItem) {
    if (this.multi) {
      let selected = Array.isArray(this.selected) ? this.selected : [];
      if (selected.some(selectedItem => selectedItem.value === item.value)) {
        this.selected = selected.filter(selectedItem => selectedItem.value !== item.value) as SelectedType<this['multi']>;
      } else {
        this.selected = [...selected, item] as SelectedType<this['multi']>;
      }
    } else {
      this.selected = item as SelectedType<this['multi']>;
      this.closeCombobox();
    }
  }

  isSelected(item: ComboboxItem): boolean {
    return this.multi && Array.isArray(this.selected) ? this.selected.some(selectedItem => selectedItem.value === item.value) : (this.selected as ComboboxItem).value === item.value;
  }

  protected readonly cn = cn;

  markAsTouched() {
    if (!this._touched) {
      this.onTouched();
      this._touched = true;
    }
  }

  writeValue(obj: any) {
    this.selected = obj || {value: null, label: ''};
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

  getValue() {
    if (this.multi) {
      let selected = this.selected as ComboboxItem[] | undefined;
      if (selected && selected.length > 1) {
        return `${selected.length} items selected`;
      } else if (selected && selected.length === 1) {
        return selected[0].label;
      } else {
        return '';
      }
    } else {
      return (this.selected as ComboboxItem).label;
    }
  }
}
