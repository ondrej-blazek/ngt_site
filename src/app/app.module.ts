import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

// Declarations
import { environment } from '@env/environment';
import { MaterialModule } from '@app/app.material.module';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';

// Auth stuff
import { AuthModule } from '@app/auth/auth.module';
import { AuthGuard, AuthService, UserResolver, UserService } from '@auth/services';

// NGT base code
import { NgsModule } from '@ngs/ngs.module';
import { NgcModule } from '@ngc/ngc.module';
import { NgtModule } from '@ngt/ngt.module';

// Standard app / testing
import { HomeModule } from '@app/home/home.module';
import { SandboxModule } from '@app/sandbox/sandbox.module';
import { DemoModule } from '@app/demo/demo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp( environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AppRoutingModule,
    AuthModule,
    NgsModule,
    NgcModule,
    NgtModule,
    HomeModule,
    SandboxModule,
    DemoModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    UserService,
    UserResolver
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
