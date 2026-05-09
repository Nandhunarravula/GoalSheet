import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService, UserData } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: UserData | null = null;
  stats: any[] = [];
  teamLeads: any[] = [];

  constructor(private authService: AuthService, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.user = this.authService.getUser();
    this.loadStats();
    this.loadTeamLeads();
  }

  loadStats(): void {
    this.http.get<any[]>('assets/stats.json').subscribe({
      next: (data) => {
        console.log('Stats data fetched:', data);
        this.stats = data;
      },
      error: (err) => {
        console.error('Failed to load stats:', err);
      },
    });
  }

  loadTeamLeads(): void {
    this.http.get<any[]>('assets/teamlead.json').subscribe({
      next: (data) => {
        console.log('Team leads data fetched:', data);
        this.teamLeads = data;
      },
      error: (err) => {
        console.error('Failed to load team leads:', err);
      },
    });
  }

  navigateToLead(lead: any): void {
    this.router.navigate(['/team-lead', lead.id]);
  }
}
