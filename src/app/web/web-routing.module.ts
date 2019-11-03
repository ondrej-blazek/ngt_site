import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroBannerComponent } from './hero-banner/hero-banner.component';

const routes: Routes = [
  {
    path: 'web',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'web/herobanner',
    component: HeroBannerComponent,
    resolve: {}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
