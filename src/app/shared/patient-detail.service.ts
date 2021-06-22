import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreatePatientDetail, PatientDetail } from './patient-detail.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientDetailService {

  formData: CreatePatientDetail = new CreatePatientDetail();
  editformData: PatientDetail = new PatientDetail();
  readonly baseURL = 'https://localhost:5001/api/Patient';
  list: PatientDetail[] = [];
  constructor(private http: HttpClient) { }

  postPatientDetail() {
    return this.http.post(this.baseURL, this.formData);

  }

  putPatientDetail(id: string,PatientDetail: PatientDetail) {

    return this.http.put(`${this.baseURL}/${id}`, PatientDetail)
    .toPromise()
    .then(res =>this.list = res as PatientDetail[])
    .catch( error => console.log('oops', error));
  }

  getPatientDetail(id: string): Observable<PatientDetail> {
    return this.http.get<PatientDetail>(`${this.baseURL}/${id}`);
  }

  deletePatientDetail(id: string) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res => this.list = res as PatientDetail[]);
  }
}
