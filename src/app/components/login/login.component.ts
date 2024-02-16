import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule,MatFormFieldModule,FormsModule,MatButtonModule,MatInputModule,MatToolbarModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements  OnInit  {
  createLoginForm!: FormGroup;
 
  constructor( private formBuilder: FormBuilder){

  }
  
  ngOnInit() {

    this.createLoginForm = this.formBuilder.group({

      userName: ['', Validators.required],

      password: ['', Validators.required]

    });

 

  }

}
