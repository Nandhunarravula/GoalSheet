import { Injectable } from '@angular/core';

export interface UserData {
  employeeId: string;
  password: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: UserData | null = null;

  setUser(user: UserData): void {
    this.currentUser = user;
  }

  getUser(): UserData | null {
    return this.currentUser;
  }

  logout(): void {
    this.currentUser = null;
  }
}
