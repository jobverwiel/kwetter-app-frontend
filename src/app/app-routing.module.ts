import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppHomePageComponent } from './app-home-page/app-home-page.component';
import { AppLoginPageComponent } from './app-login-page/app-login-page.component';
import { AppRegisterPageComponent } from './app-register-page/app-register-page.component';
import { AppStartPageComponent } from './app-start-page/app-start-page.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'home', component: AppHomePageComponent },
  { path: 'start', component: AppStartPageComponent, canActivate: [AuthGuard] },
  { path: 'login', component: AppLoginPageComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
