import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-patient-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './patient-detail.component.html',
  styleUrl: './patient-detail.component.scss',
})
export class PatientDetailComponent {
  @Input() patient: any;
  patientId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    if (!this.patient) {
      this.patientId = this.route.snapshot.paramMap.get('id');
      this.patient = {
        id: this.patientId,
        name: 'Juan Pérez',
        condition: 'Critical',
        diagnosis: 'Heart Attack',
      };
    }
  }
}
