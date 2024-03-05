import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AppWideService } from '../../services/app-wide.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, FormsModule, MatButtonModule, MatInputModule, MatToolbarModule, ReactiveFormsModule, MatIconModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})


export class RegisterComponent implements OnInit {
  createRegistrationForm!: FormGroup;
  hide = true;
  private validatorForUsername = [
    Validators.required,
  ];
  private validatorForPassword = [
    Validators.required,
    Validators.minLength(10),
    this.patternValidator(/\d/, { hasNumber: true}),
    this.patternValidator(/[A-Z]/,{hasCapital: true})
  ];

  constructor(private formBuilder: FormBuilder, private appwide: AppWideService, private router: Router) {

  }

  ngOnInit() {

    this.createRegistrationForm = this.formBuilder.group({
      userName: ['', this.validatorForUsername],
      password: ['', this.validatorForPassword],
      confirmPassword: ['', Validators.required],
      MobileNo: ['', Validators.required]
    });
  }
  togglePasswordVisibility() {
    this.hide = !this.hide;

  }
  patternValidator(regex: RegExp, error: ValidationErrors | any): ValidatorFn {

    return (control: AbstractControl): { [key: string]: any } => {

      const valid = regex.test(control.value);

      return valid ? null : error;

    };
  }
}