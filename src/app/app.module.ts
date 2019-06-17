import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from '@env/environment';
import { AppRoutingModule } from '@app/app-routing.module';
import { MaterialModule } from '@app/app.material.module';

import { AuthModule } from '@app/auth/auth.module';
import { HomeModule } from '@app/home/home.module';
import { AuthGuard, AuthService, UserResolver, UserService } from '@auth/services';
import { AppComponent } from '@app/app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp( environment.firebase),
    AngularFireAuthModule,
    AuthModule,
    HomeModule
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
