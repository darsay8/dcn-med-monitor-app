import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, catchError, throwError } from 'rxjs';
import { Patient } from '../../models/models';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private readonly dataUrl = environment.serverEndpoints.patientsUri;

  constructor(private http: HttpClient) {}

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.dataUrl);
  }

  getPatientById(patientId: number): Observable<Patient | undefined> {
    return this.http.get<Patient[]>(this.dataUrl).pipe(
      map((patients) => {
        return patients.find((patient) => patient.id === patientId);
      }),
      catchError((error) => {
        console.error('Error getting patient by ID:', error);
        return throwError(error);
      })
    );
  }
}
