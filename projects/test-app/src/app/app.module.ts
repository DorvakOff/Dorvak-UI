import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {DorvakUiModule} from "dorvak-ui";
import {LucideAngularModule} from "lucide-angular";
import { icons } from 'lucide-angular';
import {RouterLink, RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DorvakUiModule,
    LucideAngularModule.pick(icons),
    RouterLink,
    RouterModule.forRoot([]),
    ReactiveFormsModule,
    FormsModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
