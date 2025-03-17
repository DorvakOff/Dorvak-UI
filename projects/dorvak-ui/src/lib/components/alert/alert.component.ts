import {booleanAttribute, Component, Input, ViewEncapsulation} from '@angular/core';
import {Variant} from "../../models/variant";
import {LucideIconNode} from "lucide-angular/icons/types";
import {LucideAngularModule} from "lucide-angular";
import {cva} from "class-variance-authority";
import {ButtonComponent} from "../button/button.component";

const alertVariants = cva(
  "border-2 p-3 flex gap-2 rounded-md bg w-full max-w-xl relative",
  {
    variants: {
      variant: {
        primary: "border-primary text-primary bg-primary/10",
        secondary: "border-secondary text-secondary bg-secondary/10",
        success: "border-success text-success bg-success/10",
        destructive: "border-destructive text-destructive bg-destructive/10",
        warning: "border-warning text-warning bg-warning/10",
        info: "border-info text-info bg-info/10"
      }
    },
    defaultVariants: {
      variant: "primary"
    }
  }
)

@Component({
  selector: 'dui-alert',
  encapsulation: ViewEncapsulation.None,
  imports: [
    LucideAngularModule,
    ButtonComponent
  ],
  template: `
    @if (!this._dismissed) {
      <div [class]="alertVariants({ variant })" #host>
        @if (closable) {
          <div class="absolute top-2 right-2">
            <dui-button variant="link" icon="x" size="icon" (click)="dismiss()"/>
          </div>
        }
        @if (icon) {
          <i-lucide [name]="icon" [size]="28"/>
        }
        <div class="flex flex-col">
          <span slot="title" class="font-bold">
              <ng-content select="[slot='title']"/>
          </span>
          <ng-content/>
        </div>
      </div>
    }
  `,
})
export class AlertComponent {

  alertVariants = alertVariants;

  @Input() variant: Variant = 'primary';
  @Input() icon: string | readonly LucideIconNode[] | undefined;
  @Input({transform: booleanAttribute}) closable: boolean = false;

  protected _dismissed = false;

  dismiss() {
    this._dismissed = true;
  }
}
