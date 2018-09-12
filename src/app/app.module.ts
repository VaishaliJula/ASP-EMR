import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HeaderComponent } from './header/header.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent, //our directives , components and pipes are declared here 
    SignUpPageComponent,
    LoginPageComponent,
    ProductListComponent,
    HeaderComponent,
    PatientDashboardComponent
  ],
  imports: [
    BrowserModule, // 3rd party or external directives, components or pipes are declared here
    FormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
