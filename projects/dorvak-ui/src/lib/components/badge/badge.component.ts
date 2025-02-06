import {Component, Input} from '@angular/core';
import {LucideAngularModule} from "lucide-angular";
import {LucideIconNode} from "lucide-angular/icons/types";
import {Variant} from "../../models/variant";
import {NgClass, NgIf} from "@angular/common";

@Component({
    selector: 'dui-badge',
    standalone:true,
    template: `
    <div [ngClass]="['badge', variant]">
      <span class="badge-content">
        <i-lucide *ngIf="icon" [name]="icon" [size]="16"/>
        <ng-content/>
      </span>
    </div>
  `,
    styleUrls: ['./badge.component.scss'],
  imports: [
    LucideAngularModule,
    NgIf,
    NgClass
  ]
})
export class BadgeComponent {

  @Input() variant: Variant = 'primary';
  @Input() icon: string | readonly LucideIconNode[] | undefined;

}
