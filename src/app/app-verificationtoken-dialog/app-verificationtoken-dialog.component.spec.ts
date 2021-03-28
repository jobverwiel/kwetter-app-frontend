import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppVerificationtokenDialogComponent } from './app-verificationtoken-dialog.component';

describe('AppVerificationtokenDialogComponent', () => {
  let component: AppVerificationtokenDialogComponent;
  let fixture: ComponentFixture<AppVerificationtokenDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppVerificationtokenDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppVerificationtokenDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
