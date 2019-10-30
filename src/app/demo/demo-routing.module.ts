import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Local setup
import { PageCarComponent } from './page-car/page-car.component';
import { PageCthulhuComponent } from './page-cthulhu/page-cthulhu.component';
import { PageDancerComponent } from './page-dancer/page-dancer.component';
import { PageDatsunComponent } from './page-datsun/page-datsun.component';
import { PageHelmetComponent } from './page-helmet/page-helmet.component';

const routes: Routes = [
  {
    path: 'demo',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'demo/car',
    component: PageCarComponent,
    resolve: {}
  },
  {
    path: 'demo/dancer',
    component: PageDancerComponent,
    resolve: {}
  },
  {
    path: 'demo/helmet',
    component: PageHelmetComponent,
    resolve: {}
  },
  {
    path: 'demo/cthulhu',
    component: PageCthulhuComponent,
    resolve: {}
  },
  {
    path: 'demo/datsun',
    component: PageDatsunComponent,
    resolve: {}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
