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
    const user = this.credentials.find(
      (cred) =>
        cred.employeeId === this.employeeId &&
        cred.password === this.password
    );

    if (user) {
      this.authService.setUser(user);
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Invalid Employee ID or Password';
    }
  }
}
