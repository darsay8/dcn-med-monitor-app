import { Component, OnInit } from '@angular/core';
import { MsalAuthService } from '../../auth/msal.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  loginDisplay = false;
  userProfile: any = null;
  private subscriptions = new Subscription();

  constructor(private msalAuthService: MsalAuthService) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.msalAuthService.isAuthenticated$.subscribe((isAuthenticated) => {
        this.loginDisplay = isAuthenticated;
      })
    );

    this.subscriptions.add(
      this.msalAuthService.userProfile$.subscribe((profile) => {
        this.userProfile = profile;
      })
    );
  }

  loginPopup(): void {
    this.msalAuthService.loginPopup();
  }

  loginRedirect(): void {
    this.msalAuthService.loginRedirect();
  }

  logout(): void {
    this.msalAuthService.logout();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
