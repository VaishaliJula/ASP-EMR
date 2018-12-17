import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HeaderComponent } from './header/header.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { AppRoutingModule } from './/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationService } from 'src/app/registration.service';
import { HttpModule } from '@angular/http';
import { PatientsComponent } from './patients/patients.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { PatientsService } from 'src/app/patients.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/login.service';
import { AuthGuard } from 'src/app/auth.guard';
import { HttpService } from './http.service';
import { TimeSelectionComponent } from './components/time-selection/time-selection.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule
} from '@angular/material/';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { AddSoapNoteComponent } from './add-soap-note/add-soap-note.component';
import { UpdateAppointmentComponent } from './update-appointment/update-appointment.component';
import { PatientChartsComponent } from './patient-charts/patient-charts.component';
import { LoginDetailsComponent } from './login-details/login-details.component';
import { DoctorRegistrationComponent } from './doctor-registration/doctor-registration.component';
import { UpdatePatientPersonaldetailsComponent } from './update-patient-personaldetails/update-patient-personaldetails.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpPageComponent,
    LoginPageComponent,
    ProductListComponent,
    HeaderComponent,
    PatientDashboardComponent,
    PatientsComponent,
    AppointmentsComponent,
    TimeSelectionComponent,
    MainComponent,
    AddAppointmentComponent,
    AddSoapNoteComponent,
    UpdateAppointmentComponent,
    PatientChartsComponent,
    LoginDetailsComponent,
    DoctorRegistrationComponent,
    UpdatePatientPersonaldetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    NgbDatepickerModule.forRoot()
  ],
  providers: [RegistrationService, LoginService, AuthGuard, HttpService],
  bootstrap: [AppComponent],
  entryComponents: [
    AddAppointmentComponent,
    AddSoapNoteComponent,
    UpdateAppointmentComponent,
    UpdatePatientPersonaldetailsComponent
  ]
})
export class AppModule {}
