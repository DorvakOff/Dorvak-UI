import {booleanAttribute, Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'dui-tab',
  encapsulation: ViewEncapsulation.None,
  template: `
    @if (selected) {
     <ng-content/>
    }
  `
})
export class TabComponent {

  @Input() title = '';
  @Input({ transform: booleanAttribute }) selected = false;
  @Input({ transform: booleanAttribute }) disabled = false;

}
