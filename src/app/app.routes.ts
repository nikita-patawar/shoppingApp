import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';

export const routes: Routes = [
    {path:'', redirectTo:'login', pathMatch:'full'},
    {path:'register', component: RegisterComponent},
    {path:'products', component: ProductListComponent},
    {path:'login', component: LoginComponent},
    {path:'productdetails', component: ProductdetailsComponent}
];
