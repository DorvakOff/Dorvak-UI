import { Component } from '@angular/core';
import {ICellRenderer} from "dorvak-ui";
import {DorvakUiModule} from "dorvak-ui";

@Component({
  selector: 'app-status-cell-renderer',
  imports: [DorvakUiModule],
  template: `
    <dui-badge icon="check" [variant]="getVariant()">
      {{ params.value }}
    </dui-badge>
  `,
})
export class StatusCellRendererComponent implements ICellRenderer {

  params: any;

  duiInit(params: any) {
    this.params = params;
  }

  getVariant() {
    switch (this.params.value) {
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
