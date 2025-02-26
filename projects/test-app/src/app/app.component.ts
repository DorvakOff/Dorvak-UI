import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ComboboxItem} from "../../../dorvak-ui/src/lib/components/combobox/combobox.component";
import {SelectItem} from "../../../dorvak-ui/src/lib/components/select/select.component";

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
  dateMin: Date = new Date();

}
