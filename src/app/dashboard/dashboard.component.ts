import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  userName: string = '';
  loginTime: Date = new Date();

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.userName = navigation.extras.state['userName'];
      this.loginTime = new Date(navigation.extras.state['loginTime']);
    }
  }

    ngOnInit(): void {
    }
}
