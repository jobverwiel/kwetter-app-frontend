import { Component, ElementRef, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-app-home-page',
  templateUrl: './app-home-page.component.html',
  styleUrls: ['./app-home-page.component.css']
})
export class AppHomePageComponent implements OnInit {

  constructor(private elementRef: ElementRef, public auth: AuthenticationService, private httpService: AppService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'black';
 }
  Logout(){
    this.auth.logout();
  }
  getUsers(){
    this.httpService.getUsers().subscribe({
      next: (resp) =>{
        console.log(resp)
      },
      error: (err) =>{
        console.log(err)
      }
    })
  }
}
