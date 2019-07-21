import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserResolver } from '@auth/services';

// Local setup
import { TestCanvasComponent } from './test-canvas/test-canvas.component';
import { TestSetupComponent } from './test-setup/test-setup.component';
import { TestCombinedComponent } from './test-combined/test-combined.component';

const routes: Routes = [
  {
    path: 'test-canvas',
    component: TestCanvasComponent,
    resolve: {
      data: UserResolver
    }
  },
  {
    path: 'test-setup',
    component: TestSetupComponent,
    resolve: {
      data: UserResolver
    }
  },
  {
    path: 'test-combined',
    component: TestCombinedComponent,
    resolve: {
      data: UserResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SandboxRoutingModule { }
