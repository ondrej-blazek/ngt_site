import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgsModule } from '@ngs/ngs.module';
import { NgcModule } from '@ngc/ngc.module';
import { NgtModule } from '@ngt/ngt.module';
import { NgdModule } from '@ngd/ngd.module';

import { CarComponent } from './car/car.component';
import { DancerComponent } from './dancer/dancer.component';
import { HelmetComponent } from './helmet/helmet.component';
import { CthulhuComponent } from './cthulhu/cthulhu.component';
import { DatsunComponent } from './datsun/datsun.component';

import { TestCanvasComponent } from './test-canvas/test-canvas.component';
import { TestSetupComponent } from './test-setup/test-setup.component';
import { TestCombinedComponent } from './test-combined/test-combined.component';
import { TestInterCanvasComponent } from './test-inter-canvas/test-inter-canvas.component';
import { TestInnerHTMLComponent } from './test-inter-html/test-inter-html.component';
import { TestGLTFComponent } from './test-gltf/test-gltf.component';
import { TestGLTFLightsComponent } from './test-gltf-lights/test-gltf-lights.component';

import { UiLayersComponent } from './test-combined/ui-layers/ui-layers.component';
import { UiCamerasComponent } from './test-gltf-lights/ui-cameras/ui-cameras.component';

@NgModule({
  imports: [
    CommonModule,
    NgsModule,
    NgcModule,
    NgtModule,
    NgdModule
  ],
  declarations: [
    CarComponent, DancerComponent, HelmetComponent, CthulhuComponent, DatsunComponent,
    TestCanvasComponent, TestSetupComponent, TestCombinedComponent, TestInterCanvasComponent,
    TestInnerHTMLComponent, TestGLTFComponent, TestGLTFLightsComponent,
    UiLayersComponent, UiCamerasComponent
  ],
  providers: [],
  exports: [
    CarComponent, DancerComponent, HelmetComponent, CthulhuComponent, DatsunComponent,
    TestCanvasComponent, TestSetupComponent, TestCombinedComponent, TestInterCanvasComponent,
    TestInnerHTMLComponent, TestGLTFComponent, TestGLTFLightsComponent,
    UiLayersComponent, UiCamerasComponent
  ]
})

export class NgrModule {}
