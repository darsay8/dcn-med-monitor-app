import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PatientDetailComponent } from './components/patient-detail/patient-detail.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'patient/:id', component: PatientDetailComponent },
];
