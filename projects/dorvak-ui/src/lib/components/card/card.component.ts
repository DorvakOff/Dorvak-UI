import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'dui-card',
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="rounded-xl border bg-card text-card-foreground shadow">
      <span class="leading-none tracking-tight flex flex-col p-6">
        <span class="font-semibold text-lg">
            <ng-content select="[slot='title']"/>
        </span>
        <span class="text-sm">
            <ng-content select="[slot='subtitle']"/>
        </span>
      </span>

      <div class="p-6 pt-0">
        <ng-content select="[slot='content']"/>
        <ng-content/>
      </div>

      <div class="flex items-center p-6 pt-0">
        <ng-content select="[slot='footer']"/>
      </div>
    </div>
  `,
  styles: `:host { display: inline-block; }`
})
export class CardComponent {

}
