import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientDetailsFormComponent } from './patient-details-form/patient-details-form.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { HomeComponent } from './home/home.component';
import { EditPatientDetailsComponent } from './edit-patient-details/edit-patient-details.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'patient-details',
  component: PatientDetailsComponent,
},
{
  path: 'patient-form',
  component: PatientDetailsFormComponent
},
{
  path: 'edit-patient-details/:id',
component: EditPatientDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
