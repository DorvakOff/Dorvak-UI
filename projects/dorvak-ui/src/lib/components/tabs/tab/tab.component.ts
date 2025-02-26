import {booleanAttribute, Component, Input} from '@angular/core';

@Component({
  selector: 'dui-tab',
  imports: [],
  template: `
    @if (selected) {
     <ng-content/>
    }
  `,
  styles: ``
})
export class TabComponent {

  @Input() title = '';
  @Input({ transform: booleanAttribute }) selected = false;
  @Input({ transform: booleanAttribute }) disabled = false;

}
