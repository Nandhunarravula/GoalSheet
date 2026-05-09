import { Injectable } from '@angular/core';

export interface UserData {
  employeeId: string;
  password: string;
  role: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: UserData | null = null;

  setUser(user: UserData): void {
    this.user = user;
  }

  getUser(): UserData | null {
    return this.user;
  }
}
