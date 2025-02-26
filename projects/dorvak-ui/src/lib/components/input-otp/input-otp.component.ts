import {Component, EventEmitter, Output, QueryList, ViewChildren} from '@angular/core';
import {LucideAngularModule} from "lucide-angular";
import {InputComponent} from "../input/input.component";

@Component({
  selector: 'dui-input-otp',
  imports: [
    LucideAngularModule,
    InputComponent
  ],
  template: `
    <div class="flex items-center">
      <dui-input (paste)="onPaste($event)" #otpInput pattern="[0-9]"
                 inputClass="w-9 h-10 rounded-r-none" hideArrows
                 (input)="onType(0)" type="number" min="0" max="9" maxlength="1"/>
      <dui-input (paste)="onPaste($event)" #otpInput pattern="[0-9]"
                 inputClass="w-9 h-10 rounded-none" (input)="onType(1)"
                 type="number" min="0" max="9" maxlength="1" hideArrows/>
      <dui-input (paste)="onPaste($event)" #otpInput pattern="[0-9]"
                 inputClass="w-9 h-10 rounded-l-none" hideArrows
                 (input)="onType(2)" type="number" min="0" max="9" maxlength="1"/>
      <i-lucide name="minus" size="24" class="mx-1"/>
      <dui-input (paste)="onPaste($event)" #otpInput pattern="[0-9]"
                 inputClass="w-9 h-10 rounded-r-none" hideArrows
                 (input)="onType(3)" type="number" min="0" max="9" maxlength="1"/>
      <dui-input (paste)="onPaste($event)" #otpInput pattern="[0-9]"
                 inputClass="w-9 h-10 rounded-none" (input)="onType(4)"
                 type="number" min="0" max="9" maxlength="1" hideArrows/>
      <dui-input (paste)="onPaste($event)" #otpInput pattern="[0-9]"
                 inputClass="w-9 h-10 rounded-l-none" hideArrows
                 (input)="onType(5)" type="number" min="0" max="9" maxlength="1"/>
    </div>
  `,
  styles: [`
    input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  `]
})
export class InputOtpComponent {

  @Output()
  codeEntered: EventEmitter<string> = new EventEmitter<string>();

  @ViewChildren('otpInput') inputs!: QueryList<InputComponent>;

  _pasting: boolean = false;

  onType(index: number) {
    let input = this.inputs.get(index);

    if (!input) {
      return;
    }

    this.handleType(input, index);
  }

  handleType(input: InputComponent, index: number) {
    let value = input.value;
    let next = this.inputs.get(index + 1);
    let prev = this.inputs.get(index - 1);

    if (value.length > 1) {
      input.value = value[1];
      next?.focus();
    } else if (value.length === 1) {
      next?.focus();
    } else if (value.length === 0) {
      prev?.focus();
    }

    let code = this.inputs.map(input => input.value).join('');
    if (code.length === 6 && !this._pasting) {
      this.codeEntered.emit(code);
    }
  }

  onPaste(event: ClipboardEvent) {
    event.preventDefault();

    let clipboardData = event.clipboardData;
    let pastedData = clipboardData?.getData('text');
    let values = pastedData?.split('').map(value => isNaN(parseInt(value)) ? '' : parseInt(value));

    this._pasting = true;

    if (values) {
      for (let i = 0; i < values.length; i++) {
        let input = this.inputs.get(i);
        let value = values[i];
        input!.value = value.toString();
        this.handleType(input!, i);
      }
    }

    this._pasting = false;
    let code = this.inputs.map(input => input.value).join('');
    if (code.length === 6) {
      this.codeEntered.emit(code);
    }
  }

}
