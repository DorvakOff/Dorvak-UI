import {booleanAttribute, Component, Input} from '@angular/core';
import {Variant} from "../../models/variant";
import {LucideIconNode} from "lucide-angular/icons/types";
import {LucideAngularModule} from "lucide-angular";
import { cva } from "class-variance-authority"

const buttonVariants = cva(
  "shadow inline-flex justify-center text-nowrap items-center gap-2 rounded-md text-sm transition-colors duration-300 select-none disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground enabled:hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground enabled:hover:bg-secondary/90",
        success: "bg-success text-success-foreground enabled:hover:bg-success/90",
        destructive: "bg-destructive text-destructive-foreground enabled:hover:bg-destructive/90",
        warning: "bg-warning text-warning-foreground enabled:hover:bg-warning/90",
        info: "bg-info text-info-foreground enabled:hover:bg-info/90",
      },
      size: {
        default: "!h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      }
    },
    defaultVariants: {
      size: "default",
      variant: "primary"
    }
  }
)

@Component({
  selector: 'dui-button',
  imports: [
    LucideAngularModule
  ],
  template: `
    <button
      [disabled]="disabled || loading"
      [class]="buttonVariants({ variant, size })"
      [type]="submit ? 'submit' : 'button'"
    >
      @if (loading) {
        <i-lucide name="loader-circle" size="16" class="animate-spin"/>
        <span class="sr-only">Loading...</span>
      } @else {
        @if (icon) {
          <i-lucide [name]="icon" [size]="16"/>
        }
        @if (size !== 'icon') {
          <ng-content/>
        }
      }
    </button>
  `,
})
export class ButtonComponent {

  buttonVariants = buttonVariants;

  @Input() size: 'default' | 'sm' | 'lg' | 'icon' = 'default';
  @Input() variant: Variant = 'primary';
  @Input() icon: string | LucideIconNode[] | undefined;
  @Input({ transform: booleanAttribute }) disabled: boolean = false;
  @Input({ transform: booleanAttribute }) loading: boolean = false;
  @Input({ transform: booleanAttribute }) submit: boolean = false;
}
