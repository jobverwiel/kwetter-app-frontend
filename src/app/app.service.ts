import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRegisterUser } from 'src/mapping/IRegisterUser';
import { ILoginUser } from 'src/mapping/ILoginUser';
import { IVerificationTokenModel } from 'src/mapping/IVerificationTokenModel';


@Injectable()
export class AppService {
    API_GATEWAY = 'http://localhost:84/api/'
    constructor(
        private http: HttpClient,
    ) { }

    registerUser(registerUser: IRegisterUser): Observable<HttpResponse<any>> {
        return this.http.post<any>(`${this.API_GATEWAY}user/register`, registerUser, { observe: 'response' });
    }
    loginuser(loginUser: ILoginUser): Observable<HttpResponse<any>> {
        return this.http.post<any>(`${this.API_GATEWAY}user/login`, loginUser, { observe: 'response' });
    }
    sendVerificationToken(verificationTokenModel: IVerificationTokenModel): Observable<HttpResponse<any>> {
        return this.http.post<any>(`${this.API_GATEWAY}user/verifytoken`, verificationTokenModel, { observe: 'response' });
    }
    getUsers(): Observable<HttpResponse<any>> {
        return this.http.get<any>(`${this.API_GATEWAY}user/getusers`, { observe: 'response' });
    }
}