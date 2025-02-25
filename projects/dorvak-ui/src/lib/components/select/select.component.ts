import {
  booleanAttribute,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import {InputComponent} from '../input/input.component';
import {cn} from "../../utils/utils";
import {Subject, throttleTime} from "rxjs";
import {LucideAngularModule} from "lucide-angular";

export interface SelectItem {
  value: any;
  label: string;
}

@Component({
  selector: 'dui-select',
  imports: [
    InputComponent,
    LucideAngularModule,
  ],
  template: `
    <div class="relative">
      <dui-input [id]="id" [required]="required" [placeholder]="placeholder" [value]="selected.label" readonly icon="chevron-down" class="cursor-pointer" (click)="handleInputClick($event)" (keydown.enter)="handleInputClick($event)" #input/>
        <div [class]="cn(
            'absolute top-10 left-0 w-full bg-popover text-popover-foreground border border-gray-300 rounded-md shadow-md p-2 duration-300 z-10',
            showOnTop && 'bottom-10 top-auto'
            )"
             [class.hidden]="!visible && !dismissing"
             [class.animate-in]="visible" [class.fade-in-0]="visible" [class.animate-out]="dismissing" [class.fade-out-0]="dismissing"
             #combobox>
          <ul class="max-h-40 overflow-y-auto overscroll-contain">
            @for (item of items; track item.value) {
              <li [class]="cn('cursor-pointer flex justify-between items-center hover:bg-accent hover:text-accent-foreground focus-within:bg-accent focus-within:text-accent-foreground rounded-sm px-2 py-1 outline-none', item.value === selected.value && 'bg-accent text-accent-foreground')"
                (click)="onSelect(item); $event.stopPropagation()" tabindex="0" (keydown.enter)="onSelect(item)"
              >
                <span>{{ item.label }}</span>
                @if (item.value === selected.value) {
                  <i-lucide name="check" size="20" />
                }
              </li>
            }
          </ul>
        </div>
    </div>
  `,
  styles: ``
})
export class SelectComponent {

  @Input() items: SelectItem[] = [];
  @Input() placeholder: string = 'Select...';
  @Input({ transform: booleanAttribute }) disabled: boolean = false;
  @Input({ transform: booleanAttribute }) required: boolean = false;
  @Input() id: string | null = null;

  @Output() selectedChange: EventEmitter<SelectItem> = new EventEmitter<SelectItem>();

  @ViewChild('combobox') combobox!: ElementRef<HTMLDivElement>;
  @ViewChild('input') input!: InputComponent;

  private _selected: SelectItem = {value: null, label: ''};
  protected showOnTop: boolean = false;
  protected visible: boolean = false;
  protected dismissing: boolean = false

  private scrollThrottle: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.scrollThrottle.pipe(
      throttleTime(100)
    ).subscribe(showOnTop => this.showOnTop = showOnTop);
  }

  set selected(value: SelectItem) {
    this._selected = value;
    this.selectedChange.emit(value);
  }

  get selected(): SelectItem {
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
    this.showOnTop = false;
    this.recalculatePosition();
  }

  closeCombobox() {
    this.dismissing = true;

    setTimeout(() => {
      this.visible = false;
      this.dismissing = false
    }, 200);
  }

  protected onSelect(item: SelectItem) {
    this.selected = item;
    this.closeCombobox();
  }

  protected readonly cn = cn;
}
