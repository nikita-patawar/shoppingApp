import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppWideService } from '../../services/app-wide.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule,MatFormFieldModule,FormsModule,MatButtonModule,MatInputModule,MatToolbarModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements  OnInit  {
  createLoginForm!: FormGroup;
 
  constructor( private formBuilder: FormBuilder, private appwide :AppWideService,private router: Router){

  }
  
  ngOnInit() {

    this.createLoginForm = this.formBuilder.group({

      userName: ['', Validators.required],

      password: ['', Validators.required]

    });

 

  }

  onSubmit() {
    //console.log("Hii")
    const username = this.createLoginForm.get('userName')!.value;
    const password = this.createLoginForm.get('password')!.value;
    //console.log(username)

    this.appwide.authenticate(username, password).subscribe(authenticated => {
      if (authenticated) {
        console.log('Login successful');
        this.appwide.login(username);

        // Redirect to the authenticated user's dashboard or home page
        this.router.navigate(['/products']);
      } else {
        console.log('Login failed');
        // Display an error message or handle authentication failure
      }
    });
  }

  

}
