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



}
