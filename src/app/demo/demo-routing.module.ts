import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Local setup
import { CarComponent } from './car/car.component';
import { DancerComponent } from './dancer/dancer.component';
import { HelmetComponent } from './helmet/helmet.component';

const routes: Routes = [
  {
    path: 'demo',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'demo/car',
    component: CarComponent,
    resolve: {}
  },
  {
    path: 'demo/dancer',
    component: DancerComponent,
    resolve: {}
  },
  {
    path: 'demo/helmet',
    component: HelmetComponent,
    resolve: {}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
