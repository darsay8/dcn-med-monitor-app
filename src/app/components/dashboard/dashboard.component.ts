import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  patients = [
    {
      id: 1,
      name: 'Juan Pérez',
      condition: 'Good',
      diagnosis: 'Hypertension',
    },
    {
      id: 2,
      name: 'María López',
      condition: 'Critical',
      diagnosis: 'Infarct',
    },
    {
      id: 3,
      name: 'Carlos Méndez',
      condition: 'Good',
      diagnosis: 'Pneumonia',
    },
  ];

  alerts = [
    {
      patient: 'Juan Pérez',
      type: 'Warning',
      level: 'Low',
      description: 'Slightly elevated blood pressure',
    },
    {
      patient: 'María López',
      type: 'Critical',
      level: 'High',
      description: 'Irregular heartbeat',
    },
  ];
}
