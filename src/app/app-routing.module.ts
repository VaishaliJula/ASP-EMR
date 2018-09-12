import { LoginPageComponent } from "./login-page/login-page.component";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent }      from './product-list/product-list.component';
import { SignUpPageComponent } from "./sign-up-page/sign-up-page.component";

const routes: Routes = [
  { path: 'registration', component: SignUpPageComponent },
  { path:   '', component :LoginPageComponent},
  { path: 'ProductList', component: ProductListComponent },
   

];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
  
export class AppRoutingModule { }
