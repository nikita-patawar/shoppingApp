import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppWideService } from '../../services/app-wide.service';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatFormFieldModule, FormsModule, MatButtonModule, MatInputModule, MatToolbarModule, ReactiveFormsModule, MatIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  createLoginForm!: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private formBuilder: FormBuilder, private appwide: AppWideService, private router: Router, private snackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.createLoginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    const username = this.createLoginForm.get('email')!.value;
    const password = this.createLoginForm.get('password')!.value;
    this.appwide.authenticate(username, password).subscribe(authenticated => {
      if (authenticated) {
        this.appwide.login(username);
        // Redirect to the authenticated user's dashboard or home page
        this.snackBar.open('Logged In successfully.', 'Close', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
        this.router.navigate(['/products']);
      } else {
        this.snackBar.open('Invalid User', 'Close', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      }
    });
  }

  getFormErrorMessage(fieldName: string) {
    if (fieldName == 'email') {
      if (this.createLoginForm.get('email')?.hasError('required'))
        return "Email Required"
    }
    if (fieldName == 'password') {
      if (this.createLoginForm.get('password')?.hasError('required'))
        return "password Required"
    }
    return null;
  }



}
