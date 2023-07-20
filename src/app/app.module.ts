import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignatureVerificationComponent } from './signature-verification/signature-verification.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IftverificationComponent } from './iftverification/iftverification.component';
import { IftverificationdataComponent } from './iftverificationdata/iftverificationdata.component';

import { SignatureVerificationFormComponent } from './signature-verification-form/signature-verification-form.component';
import { TabledataService } from './service/tabledata.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignatureVerificationComponent,
    IftverificationComponent,
    IftverificationdataComponent,

    SignatureVerificationFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [TabledataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
