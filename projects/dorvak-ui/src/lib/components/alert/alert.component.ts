import {Component, Input} from '@angular/core';
import {Variant} from "../../models/variant";
import {LucideIconNode} from "lucide-angular/icons/types";
import {LucideAngularModule} from "lucide-angular";
import {NgClass} from "@angular/common";

@Component({
  selector: 'dui-alert',
  imports: [
    LucideAngularModule,
    NgClass
  ],
  template: `
    <div class="border-2 p-3 flex gap-2 rounded-md m-3 bg min-w-sm max-w-xl" [ngClass]="{
      'border-primary text-primary bg-primary/10': variant === 'primary',
      'border-secondary text-secondary bg-secondary/10': variant === 'secondary',
      'border-success text-success bg-success/10': variant === 'success',
      'border-destructive text-destructive bg-destructive/10': variant === 'destructive',
      'border-warning text-warning bg-warning/10': variant === 'warning',
      'border-info text-info bg-info/10': variant === 'info'
    }">
      @if (icon) {
        <i-lucide [name]="icon" [size]="28"/>
      }
      <div class="flex flex-col gap-2">
        <span slot="title" class="font-bold">
            <ng-content select="[slot='title']"/>
        </span>
        <ng-content/>
      </div>
    </div>
  `,
})
export class AlertComponent {

  @Input() variant: Variant = 'primary';
  @Input() icon: string | readonly LucideIconNode[] | undefined;

}
