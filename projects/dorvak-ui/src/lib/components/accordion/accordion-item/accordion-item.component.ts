import {booleanAttribute, Component, ElementRef, Input, ViewChild, ViewEncapsulation} from '@angular/core';
import {cn} from "../../../utils/utils";
import {LucideAngularModule} from "lucide-angular";

@Component({
  selector: 'dui-accordion-item',
  imports: [
    LucideAngularModule
  ],
  template: `
    <div class="flex flex-col px-2 py-1 w-full gap-2 border-b-2">
      <button class="w-full flex justify-between cursor-pointer enabled:hover:underline" (click)="_open = !_open">
        <span class="font-semibold font-outfit">{{ title }}</span>
        <i-lucide name="chevron-down" class="transition-transform duration-300 ease-in-out" [class.rotate-180]="_open"/>
      </button>
      <div
        class="flex w-full flex-col gap-2 overflow-hidden transition-all duration-300 ease-in-out h-full"
        [style.max-height.px]="maxHeight"
        #div
      >
        <div>
          <ng-content/>
        </div>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None
})
export class AccordionItemComponent {

  @ViewChild('div') content?: ElementRef<HTMLDivElement>;

  @Input({transform: booleanAttribute})
  set expanded(expanded: boolean) {
    this._open = expanded;
  }

  @Input()
  set title(value: string) {
    this._title = value;
    this.elementRef.nativeElement.title = '';
  }

  get title(): string {
    return this._title;
  }

  protected get maxHeight(): number {
    if (!this._open || !this.content) {
      return 0;
    }

    let children = this.content.nativeElement.children;
    let maxHeight = 0;
    for (let i = 0; i < children.length; i++) {
      let child = children[i];
      if (child instanceof HTMLElement) {
        maxHeight += child.scrollHeight;
      }
    }
    return maxHeight;
  }

  private _title: string = '';
  protected _open: boolean = false;

  constructor(private elementRef: ElementRef) {}

  open() {
    this._open = true;
  }

  close() {
    this._open = false;
  }

  protected readonly cn = cn;
}
