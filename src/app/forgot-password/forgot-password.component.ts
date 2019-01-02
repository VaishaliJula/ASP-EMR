import { HttpService } from './../http.service';
import { DateUtilsService } from './../date-utils.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { dateMaxValidator } from '../date-max-validator';
import { dateMinValidator } from '../date-minn-validator';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  @Output() close = new EventEmitter();

  mobileNumber;
  dob;
  today = this.dateUtils.formatForDomInput(new Date());
  minDOB = this.dateUtils.formatForDomInput(this.dateUtils.addYears(new Date(), -100));

  forgotPasswordForm;
  retrievedPassword;
  errorRetrieving;

  constructor(
    private fb: FormBuilder,
    private dateUtils: DateUtilsService,
    private http: HttpService
  ) {}

  ngOnInit() {
    this.forgotPasswordForm = this.fb.group({
      dob: this.fb.control('', [
        Validators.required,
        dateMaxValidator(this.today),
        dateMinValidator(this.minDOB)
      ]),
      phone: this.fb.control('', [Validators.required])
    });
  }

  submit() {
    this.retrievedPassword = null;
    this.http
      .get('login/forgotPassword', {
        params: this.forgotPasswordForm.value
      })
      .subscribe(data => {
        if (data && data.password) {
          this.retrievedPassword = data.password;
        } else {
          this.errorRetrieving = true;
        }
      }, err => {
        console.error(err);
        this.errorRetrieving = true;
      });
  }
}
