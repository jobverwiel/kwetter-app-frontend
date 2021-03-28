import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ICookieUser } from 'src/mapping/ICookieUser';
import { ILoginUser } from 'src/mapping/ILoginUser';
import { AppRegisterPageComponent } from '../app-register-page/app-register-page.component';
import { AppVerificationtokenDialogComponent } from '../app-verificationtoken-dialog/app-verificationtoken-dialog.component';
import { AppService } from '../app.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-app-login-page',
  templateUrl: './app-login-page.component.html',
  styleUrls: ['./app-login-page.component.css']
})
export class AppLoginPageComponent implements OnInit {
  User: ILoginUser;
  formLoginGroup: FormGroup;
  constructor(
    private elementRef: ElementRef, 
    public dialog: MatDialog, 
    private formBuilder: FormBuilder, 
    private httpService: AppService, 
    private authenticationService: AuthenticationService
    ) { 
    this.formLoginGroup = this.formBuilder.group({
      LoginGroupUsername: [''],
      LoginGroupPassword: [''],
    });
    this.User = {Username: null, Password: null}
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'black';
 }

 loginUser(){
   console.log(this.User)
  this.httpService.loginuser(this.User).subscribe({
    next: (resp) =>{
      console.log(resp.body)
      let user : ICookieUser = new ICookieUser;
      user.cookie = resp.body.token
      this.authenticationService.setCurrentUser(user);
    },
    error: (err) =>{
      console.log(err);
      if(err.status === 401 && err.error === "No verification code filled in!"){
        const dialogRef = this.dialog.open(AppVerificationtokenDialogComponent, {
          data: this.User
        });
      }
    }
  })
}

 openDialog() {
  const dialogRef = this.dialog.open(AppRegisterPageComponent);
}
}
