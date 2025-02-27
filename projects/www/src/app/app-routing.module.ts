import { NgModule } from '@angular/core';
import {provideRouter, RouterModule, Routes, withComponentInputBinding} from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {DocsPageComponent} from "./pages/docs-page/docs-page.component";

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'docs', component: DocsPageComponent },
  { path: 'docs/:group', component: DocsPageComponent },
  { path: 'docs/:group/:item', component: DocsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
    provideRouter(routes, withComponentInputBinding())
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
