import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { MsalAuthService } from './msal.service';

@Injectable({
  providedIn: 'root',
})
export class MsalAuthGuard implements CanActivate {
  constructor(private authService: MsalAuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    }

    this.router.navigate(['/']);
    return false;
  }
}
