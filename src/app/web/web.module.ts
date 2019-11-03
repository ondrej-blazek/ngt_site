import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebRoutingModule } from './web-routing.module';

// NGT base code
import { NgsModule } from '@ngs/ngs.module';
import { NgcModule } from '@ngc/ngc.module';
import { NgtModule } from '@ngt/ngt.module';
import { NgdModule } from '@ngd/ngd.module';
import { NgrModule } from '@ngr/ngr.module';

// Local setup
import { HeroBannerComponent } from './hero-banner/hero-banner.component';


@NgModule({
  declarations: [
    HeroBannerComponent
  ],
  imports: [
    CommonModule,
    NgsModule,
    NgcModule,
    NgtModule,
    NgdModule,
    NgrModule,
    WebRoutingModule
  ]
})
export class WebModule { }
