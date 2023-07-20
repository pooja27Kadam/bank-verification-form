import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignatureVerificationComponent } from './signature-verification/signature-verification.component';
import { IftverificationComponent } from './iftverification/iftverification.component';
import { IftverificationdataComponent } from './iftverificationdata/iftverificationdata.component';
import { SignatureVerificationFormComponent } from './signature-verification-form/signature-verification-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'signature-verification',
    component: SignatureVerificationComponent,
    children: [
      { path: 'iftverification', component: IftverificationComponent },
      { path: 'iftverificationdata', component: IftverificationdataComponent },
    ],
  },
  {
    path: 'signatureverificationform/:id',
    component: SignatureVerificationFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
