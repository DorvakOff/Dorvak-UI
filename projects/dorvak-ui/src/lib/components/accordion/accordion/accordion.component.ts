import {
  AfterContentInit,
  booleanAttribute,
  Component,
  ContentChildren,
  Input,
  QueryList,
  ViewEncapsulation
} from '@angular/core';
import {AccordionItemComponent} from "../accordion-item/accordion-item.component";

@Component({
  selector: 'dui-accordion',
  imports: [],
  template: `
    <div class="flex flex-col gap-2 w-full">
      <ng-content/>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None
})
export class AccordionComponent implements AfterContentInit {

  @ContentChildren(AccordionItemComponent) items!: QueryList<AccordionItemComponent>;

  @Input({transform: booleanAttribute}) multiple = false;

  ngAfterContentInit() {
    this.items.forEach(item => {
      item.expandedChange.subscribe(expanded => {
        if (!this.multiple && expanded) {
          this.items.filter(i => i !== item).forEach(i => i.expanded = false);
        }
      });
    });
  }

}
