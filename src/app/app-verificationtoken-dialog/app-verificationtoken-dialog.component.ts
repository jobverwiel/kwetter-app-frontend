import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppService } from '../app.service';
import { Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ILoginUser } from 'src/mapping/ILoginUser';
import { IVerificationTokenModel } from 'src/mapping/IVerificationTokenModel';

@Component({
  selector: 'app-app-verificationtoken-dialog',
  templateUrl: './app-verificationtoken-dialog.component.html',
  styleUrls: ['./app-verificationtoken-dialog.component.css']
})
export class AppVerificationtokenDialogComponent implements OnInit {
  VerificationModel: IVerificationTokenModel;
  filledInToken: string;
  formVerifyVerificationToken: FormGroup;
  constructor(private formBuilder: FormBuilder, private httpService: AppService, @Inject(MAT_DIALOG_DATA) public data: ILoginUser) { 
    this.formVerifyVerificationToken = this.formBuilder.group({
      VerifyVerificationtokenToken: [''],
    });
    this.VerificationModel = {loginViewModel: data, VerificationToken: null};
  }

  ngOnInit(): void {
  }

  sendVerificationToken(){
    this.httpService.sendVerificationToken(this.VerificationModel).subscribe({
      next: (resp) =>{
        console.log(resp)
      },
      error: (err) =>{
        console.log(err)
      }
    })
  }

}
