import {ColumnDefinition} from "./column-definition";
import {Signal} from "@angular/core";

export interface ICellRenderer {

  /**
   * The input parameters for the cell renderer.
   * This is a signal that will be passed to the cell renderer.
   *
   * <p>
   *   Example:
   * ```typescript
   * @Component({
   *  template: `<div>{{params().value}}</div>`
   * })
   * export class MyCellRenderer implements ICellRenderer {
   *   params = input.required<ICellRendererOptions>();
   * }
   * ```
   * </p>
   */
  params: Signal<ICellRendererOptions>;
}

export interface ICellRendererOptions<T = any, K extends keyof T = keyof T> {
  data: T;
  column: ColumnDefinition;
  field: K;
  value: T[K];
}
