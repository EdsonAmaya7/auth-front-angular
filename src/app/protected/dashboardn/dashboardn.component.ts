import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-dashboardn',
  templateUrl: './dashboardn.component.html',
  styles: [
    `
    *{
      margin: 15px;
    }
    `
  ]
})
export class DashboardnComponent {
  get usuario() {
    return this.authservice.usuario
  }
  
  constructor(private router: Router, private authservice: AuthService) { }

  ngOnInit(): void {
  }

  logout() {
    this.router.navigateByUrl(('/auth/login'));
    this.authservice.logout();
  }
}
