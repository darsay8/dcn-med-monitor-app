import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { MsalAuthService } from '../../auth/msal.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { Alert, Patient } from '../../models/models';
import { PatientService } from '../../services/patient/patient.service';
import { AlertService } from '../../services/alert/alert.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  private authSubscription: Subscription = new Subscription();
  patients: Patient[] = [];
  alerts: Alert[] = [];
  isAuth: boolean = false;

  constructor(
    private patientService: PatientService,
    private alertService: AlertService,
    private msalAuthService: MsalAuthService
  ) {}

  ngOnInit(): void {
    this.authSubscription = this.msalAuthService.isAuthenticated$.subscribe(
      (isAuthenticated) => {
        if (isAuthenticated) {
          this.patientService.getPatients().subscribe((patients) => {
            this.patients = patients;
          });

          this.alertService.getAlerts().subscribe((alerts) => {
            this.alerts = alerts.map((alert) => ({
              ...alert,
              level:
                alert.level.charAt(0).toUpperCase() +
                alert.level.slice(1).toLowerCase(),
            }));
          });
        }
      }
    );
  }

  isLogged(): boolean {
    this.isAuth = this.msalAuthService.isAuthenticated();
    return this.isAuth;
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
}
