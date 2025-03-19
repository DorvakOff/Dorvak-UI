import { NgModule } from '@angular/core';
import {provideRouter, RouterModule, Routes, withComponentInputBinding, withHashLocation} from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {ComponentsPageComponent} from "./pages/docs/components-page/components-page.component";
import {InstallationPageComponent} from "./pages/docs/installation-page/installation-page.component";

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'docs',
    children: [
      { path: '', redirectTo: 'getting-started', pathMatch: 'full' },
      { path: 'getting-started',
        children: [
          { path: 'installation', component: InstallationPageComponent },
          { path: '**', redirectTo: 'installation', pathMatch: 'full' },
        ]
      },
      { path: 'components',
        children: [
          { path: ':item', component: ComponentsPageComponent },
          { path: ':item/:selectedTab', component: ComponentsPageComponent },
          { path: '**', component: ComponentsPageComponent },
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
    provideRouter(routes, withComponentInputBinding(), withHashLocation())
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
