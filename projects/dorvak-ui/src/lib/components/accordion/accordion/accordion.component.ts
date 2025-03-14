import {Component, QueryList, ViewChildren, ViewEncapsulation} from '@angular/core';
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
export class AccordionComponent {

  @ViewChildren(AccordionItemComponent) items!: QueryList<AccordionItemComponent>;

}
