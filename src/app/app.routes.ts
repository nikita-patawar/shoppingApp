import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { CounterComponent } from './components/counter/counter.component';
import { DatepickerComponent } from './components/custumcomponents/datepicker/datepicker.component';

export const routes: Routes = [
    {path:'', redirectTo:'login', pathMatch:'full'},
    {path:'register', component: RegisterComponent,title:"Re"},
    {path:'products', component: ProductListComponent},
    {path:'login', component: LoginComponent,title:"Login"},
    {path:'productdetails/:id', component: ProductdetailsComponent},
    {path:'counter', component: CounterComponent},
    {path:'grid', component: DatepickerComponent}
];
