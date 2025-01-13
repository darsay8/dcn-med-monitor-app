export interface Patient {
  id: number;
  name: string;
  birthDate: string;
  diagnosis: string;
  status: string;
  dateOfAdmission: Date;
  updatedAt: Date;
}

export interface Alert {
  id: number;
  patient: string;
  type: string;
  level: string;
  description: string;
}
