import { Component } from '@angular/core';
import {PROSE_CLASS} from "../../../utils/utils";
import {cn} from "dorvak-ui";
import {CopyButtonComponent} from "../../../components/copy-button/copy-button.component";

@Component({
  selector: 'app-installation-page',
  standalone: false,
  templateUrl: './installation-page.component.html',
  styles: ``
})
export class InstallationPageComponent {

  protected readonly PROSE_CLASS = PROSE_CLASS;
  protected readonly cn = cn;
  protected readonly CopyButtonComponent = CopyButtonComponent;
}
