import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Alert } from '../../models/models';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private readonly dataUrl = environment.serverEndpoints.alertsUri;

  constructor(private http: HttpClient) {}

  getAlerts() {
    return this.http.get<Alert[]>(this.dataUrl);
  }

  getAlertById(userId: number): Observable<Alert | undefined> {
    return this.http.get<Alert[]>(this.dataUrl).pipe(
      map((alerts) => {
        return alerts.find((alert) => alert.id === userId);
      }),
      catchError((error) => {
        console.error('Error getting user by ID:', error);
        return throwError(error);
      })
    );
  }
}
