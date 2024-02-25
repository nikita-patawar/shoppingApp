import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppWideService } from '../../services/app-wide.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatCardModule,MatFormFieldModule,FormsModule,MatButtonModule,MatInputModule,MatToolbarModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  createRegistrationForm!: FormGroup;

  constructor( private formBuilder: FormBuilder, private appwide :AppWideService,private router: Router){

  }

  ngOnInit() {

    this.createRegistrationForm = this.formBuilder.group({

      userName: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword:['',Validators.required],
      MobileNo:['',Validators.required]


    });
  }
}
