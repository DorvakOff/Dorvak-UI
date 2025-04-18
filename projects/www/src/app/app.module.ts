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
import {ComponentsPageComponent} from './pages/docs/components-page/components-page.component';
import {SlugifyPipe} from './pipes/slugify.pipe';
import {MarkdownComponent, MarkdownModule} from "ngx-markdown";
import {HttpClient, provideHttpClient, withFetch, withInterceptorsFromDi} from "@angular/common/http";
import {ComponentShowcaseComponent} from './components/component-showcase/component-showcase.component';
import {AlertPreviewComponent} from './components/previews/alert/alert-preview.component';
import {AlertModalPreviewComponent} from './components/previews/alert-modal-preview/alert-modal-preview.component';
import {AvatarPreviewComponent} from './components/previews/avatar-preview/avatar-preview.component';
import {AccordionPreviewComponent} from './components/previews/accordion-preview/accordion-preview.component';
import { BadgePreviewComponent } from './components/previews/badge-preview/badge-preview.component';
import { BreadcrumbPreviewComponent } from './components/previews/breadcrumb-preview/breadcrumb-preview.component';
import { ButtonPreviewComponent } from './components/previews/button-preview/button-preview.component';
import { CalendarPreviewComponent } from './components/previews/calendar-preview/calendar-preview.component';
import { CardPreviewComponent } from './components/previews/card-preview/card-preview.component';
import { CheckboxPreviewComponent } from './components/previews/checkbox-preview/checkbox-preview.component';
import { ComboboxPreviewComponent } from './components/previews/combobox-preview/combobox-preview.component';
import { DatePickerPreviewComponent } from './components/previews/date-picker-preview/date-picker-preview.component';
import { DropdownPreviewComponent } from './components/previews/dropdown-preview/dropdown-preview.component';
import { InputPreviewComponent } from './components/previews/input-preview/input-preview.component';
import { InputOtpPreviewComponent } from './components/previews/input-otp-preview/input-otp-preview.component';
import { LinkPreviewComponent } from './components/previews/link-preview/link-preview.component';
import { ModalPreviewComponent } from './components/previews/modal-preview/modal-preview.component';
import { PaginationPreviewComponent } from './components/previews/pagination-preview/pagination-preview.component';
import { SelectPreviewComponent } from './components/previews/select-preview/select-preview.component';
import { SeparatorPreviewComponent } from './components/previews/separator-preview/separator-preview.component';
import { SwitchPreviewComponent } from './components/previews/switch-preview/switch-preview.component';
import { TablePreviewComponent } from './components/previews/table-preview/table-preview.component';
import { TabsPreviewComponent } from './components/previews/tabs-preview/tabs-preview.component';
import { TextareaPreviewComponent } from './components/previews/textarea-preview/textarea-preview.component';
import { TooltipPreviewComponent } from './components/previews/tooltip-preview/tooltip-preview.component';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { LoginAndRegisterComponent } from './examples/login-and-register/login-and-register.component';
import { TableComponent } from './examples/table/table.component';
import { ExamplesComponent } from './examples/examples/examples.component';
import { FaqComponent } from './examples/faq/faq.component';
import { ToastPreviewComponent } from './components/previews/toast-preview/toast-preview.component';
import { RadioPreviewComponent } from './components/previews/radio-preview/radio-preview.component';
import { InstallationPageComponent } from './pages/docs/installation-page/installation-page.component';
import { TemplateComponent } from './pages/docs/template/template.component';
import { CopyButtonComponent } from './components/copy-button/copy-button.component';
import { ChartPreviewComponent } from './components/previews/chart-preview/chart-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ComponentsPageComponent,
    SlugifyPipe,
    ComponentShowcaseComponent,
    AlertPreviewComponent,
    AlertModalPreviewComponent,
    AvatarPreviewComponent,
    AccordionPreviewComponent,
    BadgePreviewComponent,
    BreadcrumbPreviewComponent,
    ButtonPreviewComponent,
    CalendarPreviewComponent,
    CardPreviewComponent,
    CheckboxPreviewComponent,
    ComboboxPreviewComponent,
    DatePickerPreviewComponent,
    DropdownPreviewComponent,
    InputPreviewComponent,
    InputOtpPreviewComponent,
    LinkPreviewComponent,
    ModalPreviewComponent,
    PaginationPreviewComponent,
    SelectPreviewComponent,
    SeparatorPreviewComponent,
    SwitchPreviewComponent,
    TablePreviewComponent,
    TabsPreviewComponent,
    TextareaPreviewComponent,
    TooltipPreviewComponent,
    ThemeToggleComponent,
    LoginAndRegisterComponent,
    TableComponent,
    ExamplesComponent,
    FaqComponent,
    ToastPreviewComponent,
    RadioPreviewComponent,
    InstallationPageComponent,
    TemplateComponent,
    CopyButtonComponent,
    ChartPreviewComponent
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
