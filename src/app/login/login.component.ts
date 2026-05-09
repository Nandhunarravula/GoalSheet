import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService, UserData } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  employeeId = '';
  password = '';
  errorMessage = '';
  credentials: UserData[] = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadCredentials();
  }

  loadCredentials(): void {
    const files = ['assets/employee.json', 'assets/teamlead.json', 'assets/admin.json'];
    let loadedCount = 0;

    files.forEach(file => {
      this.http.get<UserData>(file).subscribe({
        next: data => {
          this.credentials.push(data);
          loadedCount++;
        },
        error: () => {
          loadedCount++;
        }
      });
    });
  }

  login(): void {
    this.errorMessage = '';

    if (this.credentials.length === 0) {
      this.errorMessage = 'Login system is not ready.';
      return;
    }

    const user = this.credentials.find(
      c => c.employeeId === this.employeeId && c.password === this.password
    );

    if (user) {
      this.authService.setUser(user);
      this.router.navigate(['/dashboard']);
      return;
    }

    this.errorMessage = 'Employee ID or password is incorrect.';
  }
}
