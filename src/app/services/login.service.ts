import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SocialAuthService } from "@abacritt/angularx-social-login";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$: Observable<boolean> = this.isAuthenticatedSubject.asObservable();

  private userSubject = new BehaviorSubject<any>(null);
  user$: Observable<any> = this.userSubject.asObservable();

  constructor(private authService: SocialAuthService) {}

  login(userDetails: any) {
    this.userSubject.next(userDetails);
    this.isAuthenticatedSubject.next(true);
  }

  logout() {
    this.authService.signOut();
    this.userSubject.next(null);
    this.isAuthenticatedSubject.next(false);
  }
}
