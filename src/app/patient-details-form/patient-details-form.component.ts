import { Component, OnInit } from '@angular/core';
import { CreatePatientDetail } from '../shared/patient-detail.model';
import { PatientDetailService } from '../shared/patient-detail.service';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar'
import { MatButton } from '@angular/material/button';


@Component({
  selector: 'app-patient-details-form',
  templateUrl: './patient-details-form.component.html',
  styleUrls: ['./patient-details-form.component.scss']
})
export class PatientDetailsFormComponent implements OnInit {

  constructor(public service: PatientDetailService, public _snackBar: MatSnackBar) { }


  ngOnInit(): void {
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new CreatePatientDetail();
  }

  onSubmit(form: NgForm) {
    try {
      this.insertRecord(form);
    }
    catch(err){
      this.openSnackBar(err.message,'Close', 'Red');
    }
  }


  insertRecord(form: NgForm) {
    this.service.postPatientDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => { console.log(err); }
    )
  }

  openSnackBar(message: string, action: string, className: string) {
    this._snackBar.open(message, action, {
      duration: 4000,
      panelClass: [className]
    });
}

}


