import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, map } from 'rxjs';
import { Iproduct } from '../interfaces/product';

const STORAGE_KEY = 'userLoggedIn';
const USER_KEY = 'username';

@Injectable({
  providedIn: 'root'
})


export class AppWideService {

  private usersUrl =  'http://localhost:3000/users';
  private getAllProducts =  'http://localhost:3000/products';
  private register = 'http://localhost:3000/registrationDetails';

  

  constructor(private http: HttpClient,private cookieService: CookieService) {
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.usersUrl);
  }

  authenticate(username: string, password: string): Observable<boolean> {
    //console.log("in service function call")
    return this.getUsers().pipe(
      map(users => {
        const authenticatedUser = users.find(user => user.email === username && user.password === password);
        return authenticatedUser;
      })
    );
  }

   getProducts(): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(this.getAllProducts)
   }

   getProductById(productId: number): Observable<Iproduct> {
    let url=`${this.getAllProducts}/${productId}`
    console.log(url)
    let pro= this.http.get<Iproduct>(url);
    console.log(pro)
    return pro
  }
   login(username: string): void {
    this.cookieService.set(STORAGE_KEY, 'true');
     this.cookieService.set(USER_KEY, username);
  }

  logout(): void {
    this.cookieService.delete(STORAGE_KEY);
    this.cookieService.delete(USER_KEY);
  }

  isLoggedIn(): boolean {
    return this.cookieService.get(STORAGE_KEY) === 'true';
  }

  getUsername(): string | null {
    return this.cookieService.get(USER_KEY);
  }

  registerUser(userData: any): Observable<any> {
    return this.http.post(this.register, userData);
  }
}