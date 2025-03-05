import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ColumnDefinition, ComboboxItem, SelectItem} from "dorvak-ui";
import {StatusCellRendererComponent} from "./components/status-cell-renderer/status-cell-renderer.component";

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

  constructor(private fb: FormBuilder) {
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
    {field: 'age', headerName: 'Age', cellRenderer: (params: any) => `${params.value} years old`},
    {field: 'address', headerName: 'Address'},
    {field: 'status', headerName: 'Account Status', cellRenderer: StatusCellRendererComponent},
  ]

  tableData = [
    {name: 'John', age: 25, address: '123 Main St', status: 'active'},
    {name: 'Jane', age: 30, address: '456 Elm St', status: 'inactive'},
    {name: 'Bob', age: 35, address: '789 Oak St', status: 'need-verification'},
    {name: 'Alice', age: 28, address: '101 Pine St', status: 'active'},
    {name: 'Charlie', age: 22, address: '202 Maple St', status: 'inactive'},
    {name: 'David', age: 40, address: '303 Birch St', status: 'active'},
    {name: 'Eve', age: 29, address: '404 Cedar St', status: 'need-verification'}
  ]

}
