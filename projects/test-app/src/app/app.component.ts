import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ColumnDefinition, ComboboxItem, SelectItem} from "dorvak-ui";
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
    {
      field: 'status',
      headerName: 'Account Status',
      cellRenderer: StatusCellRendererComponent,
      filterable: false,
      sortable: false
    },
  ]

  tableData: DemoTableData[] = [
    {name: 'John', age: 25, address: '123 Main St', status: 'active'},
    {name: 'Jane', age: 30, address: '456 Elm St', status: 'inactive'},
    {name: 'Bob', age: 35, address: '789 Oak St', status: 'need-verification'},
    {name: 'Alice', age: 28, address: '101 Pine St', status: 'active'},
    {name: 'Charlie', age: 22, address: '202 Maple St', status: 'inactive'},
    {name: 'David', age: 40, address: '303 Birch St', status: 'active'},
    {name: 'Eve', age: 29, address: '404 Cedar St', status: 'need-verification'},
    {name: 'Frank', age: 33, address: '505 Spruce St', status: 'active'},
    {name: 'Grace', age: 27, address: '606 Willow St', status: 'inactive'},
    {name: 'Heidi', age: 31, address: '707 Fir St', status: 'active'},
    {name: 'Ivan', age: 26, address: '808 Cypress St', status: 'need-verification'},
    {name: 'Judy', age: 24, address: '909 Redwood St', status: 'active'},
    {name: 'Kevin', age: 38, address: '111 Chestnut St', status: 'inactive'},
    {name: 'Laura', age: 32, address: '222 Walnut St', status: 'active'},
    {name: 'Mallory', age: 36, address: '333 Poplar St', status: 'need-verification'},
    {name: 'Nina', age: 30, address: '444 Hickory St', status: 'active'},
    {name: 'Oscar', age: 34, address: '555 Ash St', status: 'inactive'},
    {name: 'Peggy', age: 29, address: '666 Sycamore St', status: 'active'},
    {name: 'Quentin', age: 37, address: '777 Elm St', status: 'need-verification'},
    {name: 'Rupert', age: 28, address: '888 Oak St', status: 'active'},
    {name: 'Sybil', age: 31, address: '999 Pine St', status: 'inactive'},
    {name: 'Trent', age: 35, address: '1010 Maple St', status: 'active'},
    {name: 'Uma', age: 27, address: '1111 Birch St', status: 'need-verification'},
    {name: 'Victor', age: 33, address: '1212 Cedar St', status: 'active'},
    {name: 'Walter', age: 40, address: '1313 Spruce St', status: 'inactive'},
    {name: 'Xena', age: 22, address: '1414 Willow St', status: 'active'},
    {name: 'Yara', age: 30, address: '1515 Fir St', status: 'need-verification'},
    {name: 'Zane', age: 26, address: '1616 Cypress St', status: 'active'},
    {name: 'Aaron', age: 24, address: '1717 Redwood St', status: 'inactive'},
    {name: 'Bella', age: 38, address: '1818 Chestnut St', status: 'active'},
    {name: 'Cathy', age: 32, address: '1919 Walnut St', status: 'need-verification'},
    {name: 'Derek', age: 36, address: '2020 Poplar St', status: 'active'},
    {name: 'Eva', age: 30, address: '2121 Hickory St', status: 'inactive'},
    {name: 'Frankie', age: 34, address: '2222 Ash St', status: 'active'},
    {name: 'Gina', age: 29, address: '2323 Sycamore St', status: 'need-verification'},
    {name: 'Henry', age: 37, address: '2424 Elm St', status: 'active'},
    {name: 'Ivy', age: 28, address: '2525 Oak St', status: 'inactive'},
    {name: 'Jack', age: 31, address: '2626 Pine St', status: 'active'},
    {name: 'Kathy', age: 35, address: '2727 Maple St', status: 'need-verification'},
    {name: 'Leo', age: 27, address: '2828 Birch St', status: 'active'},
    {name: 'Mia', age: 33, address: '2929 Cedar St', status: 'inactive'},
    {name: 'Nate', age: 40, address: '3030 Spruce St', status: 'active'},
    {name: 'Olivia', age: 22, address: '3131 Willow St', status: 'need-verification'},
    {name: 'Paul', age: 30, address: '3232 Fir St', status: 'active'},
    {name: 'Quinn', age: 26, address: '3333 Cypress St', status: 'inactive'},
    {name: 'Rita', age: 24, address: '3434 Redwood St', status: 'active'},
    {name: 'Sam', age: 38, address: '3535 Chestnut St', status: 'need-verification'},
    {name: 'Tina', age: 32, address: '3636 Walnut St', status: 'active'},
    {name: 'Ursula', age: 36, address: '3737 Poplar St', status: 'inactive'},
    {name: 'Victor', age: 30, address: '3838 Hickory St', status: 'active'},
    {name: 'Will', age: 34, address: '3939 Ash St', status: 'need-verification'},
    {name: 'Xander', age: 29, address: '4040 Sycamore St', status: 'active'},
    {name: 'Yasmine', age: 37, address: '4141 Elm St', status: 'inactive'},
    {name: 'Zara', age: 28, address: '4242 Oak St', status: 'active'},
    {name: 'Aaron', age: 31, address: '4343 Pine St', status: 'need-verification'},
    {name: 'Bella', age: 35, address: '4444 Maple St', status: 'active'},
    {name: 'Cathy', age: 27, address: '4545 Birch St', status: 'inactive'},
    {name: 'Derek', age: 33, address: '4646 Cedar St', status: 'active'},
    {name: 'Eva', age: 40, address: '4747 Spruce St', status: 'need-verification'},
    {name: 'Frankie', age: 22, address: '4848 Willow St', status: 'active'},
    {name: 'Gina', age: 30, address: '4949 Fir St', status: 'inactive'},
    {name: 'Henry', age: 26, address: '5050 Cypress St', status: 'active'},
    {name: 'Ivy', age: 24, address: '5151 Redwood St', status: 'need-verification'},
    {name: 'Jack', age: 38, address: '5252 Chestnut St', status: 'active'},
    {name: 'Kathy', age: 32, address: '5353 Walnut St', status: 'inactive'},
    {name: 'Leo', age: 36, address: '5454 Poplar St', status: 'active'},
    {name: 'Mia', age: 30, address: '5555 Hickory St', status: 'need-verification'},
    {name: 'Nate', age: 34, address: '5656 Ash St', status: 'active'},
    {name: 'Olivia', age: 29, address: '5757 Sycamore St', status: 'inactive'},
    {name: 'Paul', age: 37, address: '5858 Elm St', status: 'active'},
    {name: 'Quinn', age: 28, address: '5959 Oak St', status: 'need-verification'},
    {name: 'Rita', age: 31, address: '6060 Pine St', status: 'active'},
    {name: 'Sam', age: 35, address: '6161 Maple St', status: 'inactive'},
    {name: 'Tina', age: 27, address: '6262 Birch St', status: 'active'},
    {name: 'Ursula', age: 33, address: '6363 Cedar St', status: 'need-verification'},
    {name: 'Victor', age: 40, address: '6464 Spruce St', status: 'active'},
    {name: 'Will', age: 22, address: '6565 Willow St', status: 'inactive'},
    {name: 'Xander', age: 30, address: '6666 Fir St', status: 'active'},
    {name: 'Yasmine', age: 26, address: '6767 Cypress St', status: 'need-verification'},
    {name: 'Zara', age: 24, address: '6868 Redwood St', status: 'active'},
    {name: 'Aaron', age: 38, address: '6969 Chestnut St', status: 'inactive'},
    {name: 'Bella', age: 32, address: '7070 Walnut St', status: 'active'},
    {name: 'Cathy', age: 36, address: '7171 Poplar St', status: 'need-verification'},
  ]
  multipleSelection: boolean = false;

}
