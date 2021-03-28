import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlSegment } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(
        private authService: AuthenticationService,
        private router: Router,
    ) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        return this.checkLogin(state.url);
    }

    checkLogin(url: string): boolean {
        if (!this.authService.isLoggedIn()) {
            if (url === '/login' || url === '/register' || url === '/recover' || url === '/start') {
                return true;
            }
        } else {
            // Can access route if logged in AND not routing to login page / register page
            if (url !== '/login' && url !== '/register' && url !== '/recover' && url !== '/start') {
                return true;
            }
        }
        if (url === '/login' || url === '/register' || url === '/recover' || url === '/start') {
            this.router.navigateByUrl('/home');
            return false;
        }

        this.authService.redirectUrl = url;
        this.router.navigate(['/start']);
        return false;
    }
}
