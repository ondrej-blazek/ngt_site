import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SandboxRoutingModule } from './sandbox-routing.module';

// NGT base code
import { NgsModule } from '@ngs/ngs.module';
import { NgcModule } from '@ngc/ngc.module';
import { NgtModule } from '@ngt/ngt.module';
import { NgdModule } from '@ngd/ngd.module';

// Local setup
import { TestCanvasComponent } from './test-canvas/test-canvas.component';
import { TestSetupComponent } from './test-setup/test-setup.component';
import { TestCombinedComponent } from './test-combined/test-combined.component';
import { UiLayersComponent } from './test-combined/ui-layers/ui-layers.component';

@NgModule({
  declarations: [
    TestCanvasComponent,
    TestSetupComponent,
    TestCombinedComponent,
    UiLayersComponent
  ],
  imports: [
    CommonModule,
    NgsModule,
    NgcModule,
    NgtModule,
    NgdModule,
    SandboxRoutingModule
  ]
})
export class SandboxModule { }



// TODO:
//  3rd party script running within ngc
//  https://github.com/raphamorim/awesome-canvas#examples   particles.js   ->   https://codepen.io/VincentGarreau/pen/pnlso
