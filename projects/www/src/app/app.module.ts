import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DorvakUiModule} from "dorvak-ui";
import {icons, LucideAngularModule} from "lucide-angular";
import {RouterLink} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DocsPageComponent } from './pages/docs-page/docs-page.component';
import { SlugifyPipe } from './pipes/slugify.pipe';
import {MarkdownComponent, MarkdownModule} from "ngx-markdown";
import {HttpClient, provideHttpClient, withFetch, withInterceptorsFromDi} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DocsPageComponent,
    SlugifyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DorvakUiModule,
    RouterLink,
    ReactiveFormsModule,
    FormsModule,
    NgOptimizedImage,
    MarkdownComponent,
    MarkdownModule.forRoot({loader: HttpClient}),
  ],
  providers: [
    provideHttpClient(
      withFetch(),
      withInterceptorsFromDi()
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
