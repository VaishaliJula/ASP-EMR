import { LoginDetailsComponent } from './login-details/login-details.component';
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
import { PatientChartsComponent } from './patient-charts/patient-charts.component';
import { DoctorRegistrationComponent } from './doctor-registration/doctor-registration.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: PatientDashboardComponent },
      { path: 'registration', component: SignUpPageComponent },
      { path: 'appointments', component: AppointmentsComponent },
      { path: 'patients', component: PatientChartsComponent },
      { path: 'contact', component: SignUpPageComponent },
      { path: 'loginDetails', component: LoginDetailsComponent },
      {path : 'registerDoctor', component: DoctorRegistrationComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
