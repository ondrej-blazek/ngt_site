import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { FiftyFiftyComponent } from './fifty-fifty/fifty-fifty.component';

const routes: Routes = [
  {
    path: 'web',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'web/hero-banner',
    component: HeroBannerComponent,
    resolve: {}
  },
  {
    path: 'web/fifty-fifty',
    component: FiftyFiftyComponent,
    resolve: {}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
