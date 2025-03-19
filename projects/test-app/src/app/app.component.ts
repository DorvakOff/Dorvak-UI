import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ColumnDefinition, ComboboxItem, SelectItem, ToastService} from "dorvak-ui";
import {StatusCellRendererComponent} from "./components/status-cell-renderer/status-cell-renderer.component";
import {DemoTableData} from "./models/demo-table-data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styles: [`
    :host {
      display: flex;
      justify-content: center;
      gap: 1rem;
      flex-direction: column;
      padding: 1rem;
    }
  `]
})
export class AppComponent {

  formCard: FormGroup;
  formModal: FormGroup;

  comboItems: ComboboxItem[] = Array.from({length: 10}, (_, i) => ({value: i, label: `Item ${i}`}));
  selectItems: SelectItem[] = Array.from({length: 10}, (_, i) => ({value: i, label: `Item ${i}`}));

  constructor(private fb: FormBuilder, private toastService: ToastService) {
    this.formCard = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      username: ['', [Validators.required]],
      remember: [false]
    });

    this.formModal = this.fb.group({
      combo: [null, [Validators.required]],
      select: [null, [Validators.required]],
      textarea: ['', [Validators.required]],
    });
  }

  testAlert(args?: any) {
    alert(`Test alert: ${JSON.stringify(args)}`);
  }

  date: Date = new Date();

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

  get tableData(): DemoTableData[] {
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

  addToast() {
    this.toastService.addToast({
      title: 'Hello',
      message: 'This is a toast message',
      variant: 'info'
    });
  }

}
