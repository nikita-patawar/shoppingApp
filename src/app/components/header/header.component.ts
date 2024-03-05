import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { AppWideService } from '../../services/app-wide.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule,MatListModule,MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private router: Router,private appwide :AppWideService){

  }

  logout(){
    this.router.navigate(['/login']);
    this.appwide.logout()
  }
  isLoggedIn(): boolean {
    return this.appwide.isLoggedIn();
  }

  register(){
    this.router.navigate(['/register']);
  }

  logIn(){
    this.router.navigate(['/login']);
  }
}

// import { Component, Inject } from '@angular/core';

// import { FormBuilder, FormGroup, Validators, ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';

// import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

 

 

// @Component({

//   selector: 'app-new-user',

//   templateUrl: './new-user.component.html',

//   styleUrls: ['./new-user.component.scss']

// })

 

// export class NewUserComponent {

//   newUser: FormGroup;

//   additionalCriteriaFlag: boolean;

//   isMinLength: boolean;

//   globalImgPath: string;

//   selected = 'option2';

//   constructor(

//     @Inject('BASE_URL') private baseUrl: string,

//     @Inject('CUSTOMER_ID') private customerid: string,

//     @Inject('CUSTOMER_PATH') private customerpath: string,

//     @Inject('IMG_PATH') private imgPath: string,

//     @Inject('IMG_TYPE') private imgType: string,

 

//     private formBuilder: FormBuilder,

//     private snackBar: MatSnackBar

//   ) {

//     if (this.customerid !== '0' && this.imgType === 'asset') {

//       this.globalImgPath = '../..' + this.imgPath;

//     } else {

//       this.globalImgPath = this.imgPath;

//     }

//     this.newUser = this.checkValidationsOfNewUser();

//     this.additionalCriteriaFlag = false;

//     this.isMinLength = false;

//   }

 

//   horizontalPosition: MatSnackBarHorizontalPosition = 'right';

//   verticalPosition: MatSnackBarVerticalPosition = 'top';

 

//   checkValidationsOfNewUser(): FormGroup {

//     return this.formBuilder.group(

//       {

//         userName: [null, Validators.compose([Validators.required])],

//         password: [

//           null,

//           Validators.compose([

//             Validators.required,

//             this.patternValidator(/\d/, {

//               hasNumber: true

//             }),

//             this.patternValidator(/[A-Z]/, {

//               hasCapitalCase: true

//             }),

//             this.patternValidator(/[a-z]/, {

//               hasSmallCase: true

//             }),

//             this.patternValidator(/[( <>)]/, {

//               hasSpace: true

//             }),

//             this.patternValidator(

//               /[!@#$%^&*()_+\-=\[\]{};':"\\|,.\/?]/,

//               {

//                 hasSpecialCharacters: true

//               }

//             ),

//             Validators.minLength(10)

//           ])

//         ],

//         confirmPassword: [null, Validators.compose([Validators.required])],

//         firstName: [null, Validators.compose([Validators.required])],

//         lastName: [null, Validators.compose([Validators.required])],

//         question1: [null, Validators.compose([Validators.required])],

//         answer1: [null, Validators.compose([Validators.required])],

//         question2: [null, Validators.compose([Validators.required])],

//         answer2: [null, Validators.compose([Validators.required])],

//       },

//       {

//         validators: this.passwordMatchValidator.bind(this)

//       }

//     );

//   }

 

//   patternValidator(regex: RegExp, error: ValidationErrors | any): ValidatorFn {

//     return (control: AbstractControl): { [key: string]: any } => {

//       const valid = regex.test(control.value);

//       return valid ? null : error;

//     };

//   }

 

//   passwordMatchValidator(formGroup: any) {

//     const password = formGroup.get('password')?.value;

//     const confirmPassword = formGroup.get('confirmPassword')?.value;

//     this.isMinLength = password !== null && password.length >= 8 ? true : false;

//     if (password !== confirmPassword) {

//       formGroup.get('confirmPassword')?.setErrors({ passwordNotMatch: true });

//     }

//     if (password) {

//       this.checkAdditionalConditionsValidator(formGroup.get('password')?.errors);

//     }

//   }

 

//   checkAdditionalConditionsValidator(errors: any) {

//     const data = [];

//     data.push(errors.hasSmallCase, errors.hasCapitalCase, errors.hasNumber, errors.hasSpecialCharacters,errors.hasSpace);

//     const result = data.filter((element) => element === true);

//     if (result.length > 1) {

//       this.additionalCriteriaFlag = true;

//     } else {

//       this.additionalCriteriaFlag = false;

//     }

//   }

 

//   submit() {

//     this.snackBar.open('Success! Your password has been reset.', 'Close', {

//       horizontalPosition: this.horizontalPosition,

//       verticalPosition: this.verticalPosition,

//     });

//   }

// }