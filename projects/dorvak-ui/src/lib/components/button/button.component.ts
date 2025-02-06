import {booleanAttribute, Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass} from '@angular/common';
import {Variant} from "../../models/variant";
import {LucideIconNode} from "lucide-angular/icons/types";
import {LucideAngularModule} from "lucide-angular";

@Component({
  selector: 'dui-button',
  imports: [
    NgClass,
    LucideAngularModule
  ],
  template: `
    <button [disabled]="disabled || loading" class="inline-flex justify-center items-center gap-2 rounded-md text-sm transition-colors duration-300 m-1 select-none" [ngClass]="{
      'bg-primary text-primary-foreground hover:bg-primary/90': variant === 'primary',
      'bg-secondary text-secondary-foreground hover:bg-secondary/90': variant === 'secondary',
      'bg-success text-success-foreground hover:bg-success/90': variant === 'success',
      'bg-destructive text-destructive-foreground hover:bg-destructive/90': variant === 'destructive',
      'bg-warning text-warning-foreground hover:bg-warning/90': variant === 'warning',
      'bg-info text-info-foreground hover:bg-info/90': variant === 'info',
      '!h-10 px-4 py-2': size === 'default',
      'h-9 px-3': size === 'sm',
      'h-11 px-8': size === 'lg',
      'h-10 w-10': size === 'icon',
      'cursor-not-allowed opacity-50': disabled || loading
    }">
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

  @Input() size: 'default' | 'sm' | 'lg' | 'icon' = 'default';
  @Input() variant: Variant = 'primary';
  @Input() icon: string | LucideIconNode[] | undefined;
  @Input({ transform: booleanAttribute }) disabled: boolean = false;
  @Input({ transform: booleanAttribute }) loading: boolean = false;

  @Output() click = new EventEmitter<void>();

  handleClick() {
    if (!this.disabled && !this.loading) {
      this.click.emit();
    }
  }

}
