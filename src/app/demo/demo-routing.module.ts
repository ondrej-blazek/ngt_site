import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserResolver } from '@auth/services';

// Local setup
import { CarComponent } from './car/car.component';
import { DancerComponent } from './dancer/dancer.component';
import { HelmetComponent } from './helmet/helmet.component';

const routes: Routes = [
  {
    path: 'car',
    component: CarComponent,
    resolve: {
      data: UserResolver
    }
  },
  {
    path: 'dancer',
    component: DancerComponent,
    resolve: {
      data: UserResolver
    }
  },
  {
    path: 'helmet',
    component: HelmetComponent,
    resolve: {
      data: UserResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
