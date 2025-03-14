import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DorvakUiModule} from "dorvak-ui";
import {LucideAngularModule} from "lucide-angular";
import {RouterLink} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";
import {HomePageComponent} from './pages/home-page/home-page.component';
import {DocsPageComponent} from './pages/docs-page/docs-page.component';
import {SlugifyPipe} from './pipes/slugify.pipe';
import {MarkdownComponent, MarkdownModule} from "ngx-markdown";
import {HttpClient, provideHttpClient, withFetch, withInterceptorsFromDi} from "@angular/common/http";
import {ComponentShowcaseComponent} from './components/component-showcase/component-showcase.component';
import {AlertPreviewComponent} from './components/previews/alert/alert-preview.component';
import {AlertModalPreviewComponent} from './components/previews/alert-modal-preview/alert-modal-preview.component';
import {AvatarPreviewComponent} from './components/previews/avatar-preview/avatar-preview.component';
import {AccordionPreviewComponent} from './components/previews/accordion-preview/accordion-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DocsPageComponent,
    SlugifyPipe,
    ComponentShowcaseComponent,
    AlertPreviewComponent,
    AlertModalPreviewComponent,
    AvatarPreviewComponent,
    AccordionPreviewComponent
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
    LucideAngularModule,
  ],
  providers: [
    provideHttpClient(
      withFetch(),
      withInterceptorsFromDi()
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
