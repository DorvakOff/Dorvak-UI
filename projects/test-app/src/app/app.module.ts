import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {DorvakUiModule} from "dorvak-ui";
import {LucideAngularModule} from "lucide-angular";
import { icons } from 'lucide-angular';
import {RouterLink, RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DorvakUiModule,
    LucideAngularModule.pick(icons),
    RouterLink,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
