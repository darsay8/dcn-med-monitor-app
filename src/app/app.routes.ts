import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PatientDetailComponent } from './components/patient-detail/patient-detail.component';
import { MsalGuard } from '@azure/msal-angular';
import { FailedComponent } from './components/failed/failed.component';
import { ProfileComponent } from './components/profile/profile.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  {
    path: 'patient/:id',
    component: PatientDetailComponent,
    canActivate: [MsalGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [MsalGuard],
  },
  {
    path: 'login-failed',
    component: FailedComponent,
  },
];
