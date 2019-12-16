import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoRoutingModule } from './demo-routing.module';

// NGT base code
import { NgsModule } from '@ngs/ngs.module';
import { NgcModule } from '@ngc/ngc.module';
import { NgtModule } from '@ngt/ngt.module';
import { NgdModule } from '@ngd/ngd.module';
import { NgrModule } from '@ngr/ngr.module';

// Local setup
import { PageCarComponent } from './page-car/page-car.component';
import { PageCthulhuComponent } from './page-cthulhu/page-cthulhu.component';
import { PageDancerComponent } from './page-dancer/page-dancer.component';
import { PageDatsunComponent } from './page-datsun/page-datsun.component';
import { PageHelmetComponent } from './page-helmet/page-helmet.component';

@NgModule({
  declarations: [
    PageCarComponent,
    PageCthulhuComponent,
    PageDancerComponent,
    PageDatsunComponent,
    PageHelmetComponent
  ],
  imports: [
    CommonModule,
    NgsModule,
    NgcModule,
    NgtModule,
    NgdModule,
    NgrModule,
    DemoRoutingModule
  ]
})
export class DemoModule { }
