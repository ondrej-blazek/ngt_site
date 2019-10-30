import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Local setup
import { PageCanvasComponent } from './page-canvas/page-canvas.component';
import { PageCombinedComponent } from './page-combined/page-combined.component';
import { PageGltfComponent } from './page-gltf/page-gltf.component';
import { PageGltfLightsComponent } from './page-gltf-lights/page-gltf-lights.component';
import { PageInterCanvasComponent } from './page-inter-canvas/page-inter-canvas.component';
import { PageInterHtmlComponent } from './page-inter-html/page-inter-html.component';
import { PageSetupComponent } from './page-setup/page-setup.component';

const routes: Routes = [
  {
    path: 'sandbox',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'sandbox/test-canvas',
    component: PageCanvasComponent,
    resolve: {}
  },
  {
    path: 'sandbox/test-setup',
    component: PageSetupComponent,
    resolve: {}
  },
  {
    path: 'sandbox/test-interactive-canvas',
    component: PageInterCanvasComponent,
    resolve: {}
  },
  {
    path: 'sandbox/test-interactive-html',
    component: PageInterHtmlComponent,
    resolve: {}
  },
  {
    path: 'sandbox/test-combined',
    component: PageCombinedComponent,
    resolve: {}
  },
  {
    path: 'sandbox/test-gltf',
    component: PageGltfComponent,
    resolve: {}
  },
  {
    path: 'sandbox/test-gltf-lights',
    component: PageGltfLightsComponent,
    resolve: {}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SandboxRoutingModule { }
