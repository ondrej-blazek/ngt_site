import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SandboxRoutingModule } from './sandbox-routing.module';

// NGT base code
import { NgsModule } from '@ngs/ngs.module';
import { NgcModule } from '@ngc/ngc.module';
import { NgtModule } from '@ngt/ngt.module';
import { NgdModule } from '@ngd/ngd.module';
import { NgrModule } from '@ngr/ngr.module';

// Local setup
import { PageCanvasComponent } from './page-canvas/page-canvas.component';
import { PageCombinedComponent } from './page-combined/page-combined.component';
import { PageGltfComponent } from './page-gltf/page-gltf.component';
import { PageGltfLightsComponent } from './page-gltf-lights/page-gltf-lights.component';
import { PageInterHtmlComponent } from './page-inter-html/page-inter-html.component';
import { PageInterCanvasComponent } from './page-inter-canvas/page-inter-canvas.component';
import { PageSetupComponent } from './page-setup/page-setup.component';

@NgModule({
  declarations: [
    PageCanvasComponent,
    PageCombinedComponent,
    PageGltfComponent,
    PageGltfLightsComponent,
    PageInterHtmlComponent,
    PageInterCanvasComponent,
    PageSetupComponent
  ],
  imports: [
    CommonModule,
    NgsModule,
    NgcModule,
    NgtModule,
    NgdModule,
    NgrModule,
    SandboxRoutingModule
  ]
})
export class SandboxModule { }



// TODO:
//  3rd party script running within ngc
//  https://github.com/raphamorim/awesome-canvas#examples   particles.js   ->   https://codepen.io/VincentGarreau/pen/pnlso
