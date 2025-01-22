import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {DorvakUiModule} from "dorvak-ui";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DorvakUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
