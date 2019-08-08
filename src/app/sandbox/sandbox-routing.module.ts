import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Local setup
import { TestCanvasComponent } from './test-canvas/test-canvas.component';
import { TestSetupComponent } from './test-setup/test-setup.component';
import { TestCombinedComponent } from './test-combined/test-combined.component';
import { TestInterCanvasComponent } from './test-inter-canvas/test-inter-canvas.component';
import { TestInnerHTMLComponent } from './test-inter-html/test-inter-html.component';

const routes: Routes = [
  {
    path: 'sandbox',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'sandbox/test-canvas',
    component: TestCanvasComponent,
    resolve: {}
  },
  {
    path: 'sandbox/test-setup',
    component: TestSetupComponent,
    resolve: {}
  },
  {
    path: 'sandbox/test-interactive-canvas',
    component: TestInterCanvasComponent,
    resolve: {}
  },
  {
    path: 'sandbox/test-interactive-html',
    component: TestInnerHTMLComponent,
    resolve: {}
  },
  {
    path: 'sandbox/test-combined',
    component: TestCombinedComponent,
    resolve: {}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SandboxRoutingModule { }
