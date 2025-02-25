import {Component, ElementRef, EventEmitter, Output, QueryList, ViewChildren} from '@angular/core';
import {LucideAngularModule} from "lucide-angular";

@Component({
  selector: 'dui-input-otp',
  imports: [
    LucideAngularModule
  ],
  template: `
    <div class="flex items-center">
      <input (paste)="onPaste($event)" #otpInput pattern="[0-9]"
             class="w-8 h-10 focus-within:border-primary focus-visible:outline-none bg-transparent text-center text-foreground border rounded-tl-md rounded-bl-md"
             (input)="onType($event, 0)" type="number" min="0" max="9" maxlength="1"/>
      <input (paste)="onPaste($event)" #otpInput pattern="[0-9]"
             class="w-8 h-10 focus-within:border-primary focus-visible:outline-none bg-transparent text-center text-foreground border" (input)="onType($event, 1)"
             type="number" min="0" max="9" maxlength="1"/>
      <input (paste)="onPaste($event)" #otpInput pattern="[0-9]"
             class="w-8 h-10 focus-within:border-primary focus-visible:outline-none bg-transparent text-center text-foreground border rounded-tr-md rounded-br-md"
             (input)="onType($event, 2)" type="number" min="0" max="9" maxlength="1"/>
      <i-lucide name="minus" size="24" class="mx-1"/>
      <input (paste)="onPaste($event)" #otpInput pattern="[0-9]"
             class="w-8 h-10 focus-within:border-primary focus-visible:outline-none bg-transparent text-center text-foreground border rounded-tl-md rounded-bl-md"
             (input)="onType($event, 3)" type="number" min="0" max="9" maxlength="1"/>
      <input (paste)="onPaste($event)" #otpInput pattern="[0-9]"
             class="w-8 h-10 focus-within:border-primary focus-visible:outline-none bg-transparent text-center text-foreground border" (input)="onType($event, 4)"
             type="number" min="0" max="9" maxlength="1"/>
      <input (paste)="onPaste($event)" #otpInput pattern="[0-9]"
             class="w-8 h-10 focus-within:border-primary focus-visible:outline-none bg-transparent text-center text-foreground border rounded-tr-md rounded-br-md"
             (input)="onType($event, 5)" type="number" min="0" max="9" maxlength="1"/>
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

  @ViewChildren('otpInput') inputs!: QueryList<ElementRef<HTMLInputElement>>;

  _pasting: boolean = false;

  onType(event: Event, index: number) {
    let inputs = this.inputs.toArray().map(input => input.nativeElement);
    this.handleType(event.target as HTMLInputElement, inputs, index);
  }

  handleType(input: HTMLInputElement, inputs: HTMLInputElement[], index: number) {
    let value = input.value;
    let next = inputs[index + 1];
    let prev = inputs[index - 1];

    if (value.length > 1) {
      input.value = value[1];
      next?.focus();
      next?.select();
    } else if (value.length === 1) {
      next?.focus();
      next?.select();
    } else if (value.length === 0) {
      prev?.focus();
      prev?.select();
    }

    let code = inputs.map(input => input.value).join('');
    if (code.length === 6 && !this._pasting) {
      this.codeEntered.emit(code);
    }
  }

  onPaste(event: ClipboardEvent) {
    event.preventDefault();

    let clipboardData = event.clipboardData;
    let pastedData = clipboardData?.getData('text');
    let inputs = this.inputs.toArray().map(input => input.nativeElement);
    let values = pastedData?.split('').map(value => isNaN(parseInt(value)) ? '' : parseInt(value));

    this._pasting = true;

    if (values) {
      for (let i = 0; i < values.length; i++) {
        let input = inputs[i];
        let value = values[i];
        input.value = value.toString();
        this.handleType(input, inputs, i);
      }
    }

    this._pasting = false;
    let code = inputs.map(input => input.value).join('');
    if (code.length === 6) {
      this.codeEntered.emit(code);
    }
  }

}
