import {Component, input} from '@angular/core';
import {ICellRenderer, DorvakUiModule, ICellRendererOptions } from "dorvak-ui";
import {DemoTableData} from "../../models/demo-table-data";

@Component({
  selector: 'app-status-cell-renderer',
  imports: [DorvakUiModule],
  template: `
    @if (params()) {
      <dui-badge icon="check" [variant]="getVariant()">
        {{ params().value }}
      </dui-badge>
    }
  `,
})
export class StatusCellRendererComponent implements ICellRenderer {

  readonly params = input.required<ICellRendererOptions<DemoTableData, 'status'>>();

  getVariant() {
    switch (this.params().value) {
      case 'active':
        return 'success';
      case 'inactive':
        return 'destructive';
      case 'need-verification':
        return 'warning';
      default:
        return 'primary';
    }
  }

}
