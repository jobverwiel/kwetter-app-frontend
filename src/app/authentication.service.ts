import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { ICookieUser } from 'src/mapping/ICookieUser';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private userCookie: ICookieUser;
    public redirectUrl = '';

    constructor(
        private router: Router
    ) {
        if (localStorage.getItem('jwt')) {
            this.userCookie = JSON.parse(localStorage.getItem('jwt'));
        } else {
            this.userCookie = null;
        }

    }

    getCurrentUserCookie(): ICookieUser {
        return this.userCookie;
    }

    getAuthorizationToken(): ICookieUser {
        if (!this.userCookie) {
            return null;
        }

        return this.userCookie;
    }

    setCurrentUser(cookie: ICookieUser, navigate: boolean = true): void {
        this.userCookie = cookie;
        localStorage.setItem('jwt', JSON.stringify(cookie));

        if (!navigate) {
            return;
        }

        if (this.redirectUrl) {
            this.router.navigateByUrl(this.redirectUrl);
            this.redirectUrl = '';
        } else {
            this.router.navigateByUrl('/home');
        }
    }

    logout(url: string = '') {
        this.redirectUrl = url;
        localStorage.removeItem('jwt');
        this.userCookie = null;
        this.router.navigateByUrl('/login');
    }

    isLoggedIn(): boolean {
        //  console.log(this.userCookie);
        return this.userCookie ? true : false;
    }
}
