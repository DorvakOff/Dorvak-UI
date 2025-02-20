import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

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

  constructor(private fb: FormBuilder) {
    this.formCard = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      username: ['', [Validators.required]]
    });
  }

  testAlert(args?: any) {
    alert(`Test alert: ${JSON.stringify(args)}`);
  }
}
