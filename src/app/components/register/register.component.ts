import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AppWideService } from '../../services/app-wide.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, ActivatedRoute } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule, Location } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,MatCardModule, MatFormFieldModule, FormsModule, MatButtonModule, MatInputModule, MatListModule, MatToolbarModule, ReactiveFormsModule, MatIconModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})


export class RegisterComponent implements OnInit {
  registratiomform!: FormGroup;
  // isMinLength!: boolean;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  hide = true;
  private validatorForUsername = [
    Validators.required,
  ];
  id: number = 1;
  queryParams: any;
  constructor(private formBuilder: FormBuilder, private appwide: AppWideService, private router: Router, private location: Location, private route: ActivatedRoute, private snackBar: MatSnackBar) {
    this.queryParams = { ...this.route.snapshot.queryParams };
    console.log(this.route)
    // Set or update the query parameters
  }

  ngOnInit() {

    this.registratiomform = this.formBuilder.group({
      userName: ['', this.validatorForUsername],
      password: ['', [Validators.required, Validators.minLength(8), this.passwordValidator()]],
      confirmPassword: ['', [Validators.required]],
      MobileNo: ['', Validators.required]
    });
    console.log(this.registratiomform.controls)

    this.registratiomform.get('confirmPassword')?.valueChanges.subscribe(() => {
      this.passwordMatchValidator();
    });
    // this.queryParams = { ...this.route.snapshot.queryParams };
    // // console.log(this.route)
    // this.queryParams['action'] = 'setusername';
    // this.queryParams['customerpath'] = this.id;

    // // Use the Router to navigate with the updated query parameters
    // this.router.navigate([], {
    //   relativeTo: this.route,
    //   queryParams: this.queryParams,
    //   queryParamsHandling: 'merge'
    // });


  }

  get f() {
    //console.log(this.registratiomform.controls)
    return this.registratiomform.controls;
  }

  togglePasswordVisibility() {
    this.hide = !this.hide;
  }

  passwordValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value: string = control.value;

      const hasUpperCase = /[A-Z]/.test(value);
      const hasLowerCase = /[a-z]/.test(value);
      //const hasNumber = /\d/.test(value);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|]/.test(value);
      let nospaceandlessgreater = /[<>\s]/.test(value)
      if(nospaceandlessgreater==false){
        nospaceandlessgreater=true;
       
      }

      const hasLowerCaseOrSpecialChar = /[a-z]/.test(value) || /[!@#$%^&*(),.?":{}|<>]/.test(value);

      let isValid =  hasSpecialChar   && hasUpperCase && nospaceandlessgreater;
      console.log(isValid)

      return isValid ? null : { 'invalidPassword': {  hasSpecialChar, hasUpperCase, nospaceandlessgreater } };
    };
  }
  passwordMatchValidator() {

    const password = this.registratiomform.get('password')?.value;
    const confirmPassword = this.registratiomform.get('confirmPassword')?.value;
    console.log(password, confirmPassword)

    if (password !== confirmPassword) {
      this.registratiomform.get('confirmPassword')?.setErrors({ passwordNotMatch: true });
    }
  }

  register(){
    console.log(this.registratiomform)
    if(this.registratiomform.valid){
      let formToSubmit={
        email:this.registratiomform.get('userName')?.value,
        password:this.registratiomform.get('password')?.value,
        mobileno:this.registratiomform.get('MobileNo')?.value
      }
      //console.log(form)
      setTimeout(() => {
        this.appwide.registerUser(formToSubmit)
          .subscribe(response => {
            console.log('Registration successful', response);
            this.snackBar.open('Registration successfully.', 'Close', {
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
              duration: 3000,
            });
            this.registratiomform.reset();
            this.registratiomform.markAsPristine();
            // Optionally, you can navigate to another page or display a success message here
          }, error => {
            this.snackBar.open('Registration failed.', 'Close', {
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
              duration: 3000
            });
            console.error('Registration failed', error);
            // Handle the error (e.g., display an error message)
          });
      }, 2000); // 2000 milliseconds (2 seconds)
    }
  }
}
