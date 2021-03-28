import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHomePageComponent } from './app-home-page/app-home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRegisterPageComponent } from './app-register-page/app-register-page.component';
import { AppService } from './app.service';
import { AuthenticationService } from './authentication.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppInterceptor } from './app.interceptor';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { AppStartPageComponent } from './app-start-page/app-start-page.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { AppLoginPageComponent } from './app-login-page/app-login-page.component';
import { AppVerificationtokenDialogComponent } from './app-verificationtoken-dialog/app-verificationtoken-dialog.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    AppHomePageComponent,
    AppRegisterPageComponent,
    AppStartPageComponent,
    AppLoginPageComponent,
    AppVerificationtokenDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule, 
  ],
  providers: [
    AppService,
    AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
