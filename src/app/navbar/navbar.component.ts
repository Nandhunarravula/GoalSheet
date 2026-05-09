import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

interface NavItem {
  label: string;
  path: string;
  icon?: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navItems: NavItem[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadNavItems().subscribe(items => {
      this.navItems = items;
    });
  }

  private loadNavItems(): Observable<NavItem[]> {
    return this.http.get<NavItem[]>('assets/nav-data.json');
  }
}
