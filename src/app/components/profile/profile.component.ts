import { Component } from '@angular/core';
import { MsalAuthService } from '../../auth/msal.service';
import { ServerService } from '../../services/server/server.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  userProfile: any;
  serverResponse: any;
  private profileSubscription = new Subscription();

  constructor(
    private msalAuthService: MsalAuthService,
    private serverService: ServerService
  ) {}

  ngOnInit() {
    this.profileSubscription.add(
      this.msalAuthService.userProfile$.subscribe((profile) => {
        this.userProfile = profile;
      })
    );
  }

  callServer() {
    this.serverService.getServer().subscribe((response) => {
      this.serverResponse = JSON.stringify(response);
    });
  }
}
