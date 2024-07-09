import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSource = new BehaviorSubject<string | null>(this.getUserFromLocalStorage());
  currentUser = this.userSource.asObservable();

  constructor() { }

  login(userName: string) {
    localStorage.setItem('currentUser', userName);
    this.userSource.next(userName);
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.userSource.next(null);
  }

  private getUserFromLocalStorage(): string | null {
    return localStorage.getItem('currentUser');
  }
}
