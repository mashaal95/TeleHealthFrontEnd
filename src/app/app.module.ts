import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientDetailsFormComponent } from './patient-details-form/patient-details-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { EditPatientDetailsComponent } from './edit-patient-details/edit-patient-details.component';
import { WavesModule, ButtonsModule, IconsModule } from 'angular-bootstrap-md';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    PatientDetailsComponent,
    PatientDetailsFormComponent,
    HomeComponent,
    EditPatientDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    WavesModule,
    ButtonsModule,
    IconsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
