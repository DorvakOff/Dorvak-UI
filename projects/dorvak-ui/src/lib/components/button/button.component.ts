import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Variant} from "../../models/variant";

@Component({
  selector: 'dui-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button [ngClass]="[size, variant]">
      <ng-content/>
    </button>
  `,
  styles: [
    `
        button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          white-space: nowrap;
          border-radius: var(--radius);
          border: 1px solid transparent;
          box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
        }
    `, `
      button {
        &.sm {
          height: 2rem;
          padding: 0 1rem;
        }

        &.md {
          height: 2.5rem;
          padding: 0 1.5rem;
        }

        &.lg {
          height: 3rem;
          padding: 0 2rem;
        }
      }
    `, `
      button {
        &.primary {
          border-color: hsl(var(--color-primary));
          color: hsl(var(--color-primary));
        }
      }
    `
  ]
})
export class ButtonComponent {

  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() variant: Variant = 'primary';

}
