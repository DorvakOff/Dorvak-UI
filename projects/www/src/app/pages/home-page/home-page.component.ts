import { Component } from '@angular/core';
import {
  StatusCellRendererComponent
} from "../../../../../test-app/src/app/components/status-cell-renderer/status-cell-renderer.component";
import {ColumnDefinition} from "dorvak-ui";

@Component({
  selector: 'app-home-page',
  standalone: false,
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {

  columnDefinitions: ColumnDefinition[] = [
    {field: 'name', headerName: 'Name'},
    {field: 'age', headerName: 'Age', cellRenderer: (params: any) => `${params.value} years old`, dataType: 'number'},
    {field: 'address', headerName: 'Address'},
    {
      field: 'status',
      headerName: 'Account Status',
      cellRenderer: StatusCellRendererComponent,
      filterable: false,
      sortable: false
    },
    {
      field: 'createdAt',
      headerName: 'Created At',
      dataType: 'date',
    }
  ]

  get tableData(): any[] {
    const itemCount = 100;
    const statuses = ['active', 'inactive', 'need-verification'] as const;

    return Array.from({length: itemCount}, (_, i) => ({
      name: `Name ${i}`,
      age: Math.floor(Math.random() * 100),
      address: `Address ${i}`,
      status: statuses[Math.floor(Math.random() * statuses.length)],
      createdAt: new Date(Date.now() - Math.floor(Math.random() * 10000000000))
    }));
  }

  multipleSelection: boolean = false;

}
