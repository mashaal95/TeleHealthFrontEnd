import { Component, OnInit, Inject } from '@angular/core';
import { PatientDetailService } from '../shared/patient-detail.service';




@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent implements OnInit {

  constructor(public service: PatientDetailService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  onDelete(PMId: string) {
    if (confirm('Are you sure that you want to delete this patient?')) {
      this.service.deletePatientDetail(PMId)
        .subscribe(res => {
          this.service.refreshList();
        },
          err => { console.log(err); })
    }
  }



}

