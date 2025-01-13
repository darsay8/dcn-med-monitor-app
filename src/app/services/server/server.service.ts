import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MsalAuthService } from '../../auth/msal.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  constructor(private http: HttpClient) {}

  getServer() {
    return this.http.get(environment.serverEndpoints.helloUri);
  }
}
