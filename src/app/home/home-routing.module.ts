import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  {
    path: 'home',
    component: OverviewComponent,
    resolve: {}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
