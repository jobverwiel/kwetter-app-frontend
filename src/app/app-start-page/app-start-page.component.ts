import { Component, ElementRef, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppRegisterPageComponent } from '../app-register-page/app-register-page.component';

@Component({
  selector: 'app-app-start-page',
  templateUrl: './app-start-page.component.html',
  styleUrls: ['./app-start-page.component.css']
})
export class AppStartPageComponent implements OnInit {

  constructor(private elementRef: ElementRef, public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'black';
 }

 openDialog() {
  const dialogRef = this.dialog.open(AppRegisterPageComponent);
}

}
