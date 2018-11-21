import { LoginPageComponent } from './login-page/login-page.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { AppointmentsComponent } from 'src/app/appointments/appointments.component';
import { PatientsComponent } from 'src/app/patients/patients.component';
import { AuthGuard } from 'src/app/auth.guard';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'ProductList', component: ProductListComponent },
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: PatientDashboardComponent },
      { path: 'registration', component: SignUpPageComponent },
      { path: 'appointments', component: AppointmentsComponent },
      { path: 'patients', component: PatientsComponent },
      { path: 'payments', component: SignUpPageComponent },
      { path: 'contact', component: SignUpPageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
