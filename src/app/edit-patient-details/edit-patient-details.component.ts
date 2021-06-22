import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PatientDetailService } from '../shared/patient-detail.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PatientDetail } from '../shared/patient-detail.model';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-edit-patient-details',
  templateUrl: './edit-patient-details.component.html',
  styleUrls: ['./edit-patient-details.component.scss']
})
export class EditPatientDetailsComponent implements OnInit {
Patient: PatientDetail = new PatientDetail();
formGroup: FormGroup;

    constructor(fb: FormBuilder, public route: ActivatedRoute, public service: PatientDetailService, public location: Location, public _snackbar: MatSnackBar) {
        this.formGroup = fb.group({
            patientID: fb.control('initial value', Validators.required),
            firstName: fb.control('initial value', Validators.required),
            lastName: fb.control('initial value', Validators.required),
            phoneNum: fb.control('initial value', Validators.required),
            bloodType: fb.control('initial value', Validators.required),
            dateOfBirth: fb.control('initial value', Validators.required)
        });
    }

  ngOnInit(): void {
    this.formGroup.reset();
    this.getPatient();
  }

  getPatient(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.service.getPatientDetail(id).subscribe((res) => {
        this.formGroup.setValue(res);
      }
    );
  }

  goBack(): void {
    this.location.back();
  }

  resetForm(form: FormGroup) {
    form.reset();
    this.service.formData = new PatientDetail();
  }

  onSubmit(form: FormGroup) {
   this.service.putPatientDetail(form.value.patientID,form.value)

  }

  openSnackBar(message: string, action: string, className: string) {
    this._snackbar.open(message, action, {
      duration: 4000,
      panelClass: [className]
    });
}

}
