import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { IRegisterUser } from 'src/mapping/IRegisterUser';
import { AppService } from '../app.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-app-register-page',
  templateUrl: './app-register-page.component.html',
  styleUrls: ['./app-register-page.component.css']
})
export class AppRegisterPageComponent implements OnInit {
  User: IRegisterUser;
  formRegisterGroup: FormGroup;
  passwordType = 'password';
  passwordShown = false;
  constructor(private httpService: AppService, 
    private router: Router, 
    private authenticationService: AuthenticationService, 
    private formBuilder: FormBuilder,
    private elementRef: ElementRef,
    private snackbarService: MatSnackBar,
    ) { 
    this.formRegisterGroup = this.formBuilder.group({
      RegisterGroupUsername: ['', Validators.required],
      RegisterGroupDisplayName: ['', Validators.required],
      RegisterGroupEmail: ['', Validators.required],
      RegisterGroupPassword: ['', Validators.required],
      RegisterGroupConfirmPassword: ['', Validators.required],
    });
    this.User = { Username: null, Password: null, Email: null, DisplayName: null, ConfirmPassword: null };
  }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    //this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'black';
 }
  registerUser(){
    this.httpService.registerUser(this.User).subscribe({
      next: (resp) =>{
        console.log(resp)
      },
      error: (err) =>{
        this.showErrorNotification(err.error)
      }
    })
  }
  showPassword() {
    if (this.passwordShown) {
      this.passwordShown = false;
      this.passwordType = 'password';
    } else {
      this.passwordShown = true;
      this.passwordType = 'text';
    }
  }

  private showErrorNotification(message: string): void {
    this.snackbarService.open(message, undefined, {
      panelClass: 'error-snack',
      duration: 2500
    });
  }

}
