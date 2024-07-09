import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName: string | null = null;

  constructor(private AuthService: AuthService) {}

  ngOnInit(): void {
      this.AuthService.currentUser.subscribe(userName => {
        this.userName = userName;
      });
  }

  onLogout(): void {
    this.AuthService.logout();
  }
}
