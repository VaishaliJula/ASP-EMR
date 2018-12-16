import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { SoapService } from '../soap.service';
import { Soap } from '../models/Soap.model';
import { LoginService } from '../login.service';
import { MatDialogRef } from '@angular/material'

@Component({
  selector: 'app-add-soap-note',
  templateUrl: './add-soap-note.component.html',
  styleUrls: ['./add-soap-note.component.css']
})
export class AddSoapNoteComponent implements OnInit {
  mrNum;
  subjective;
  objective;
  assessment;
  plan;
  mobileNo;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private soapService: SoapService,
    private loginService: LoginService,
    private dialogRef: MatDialogRef<AddSoapNoteComponent>
  ) {
    this.mrNum = data.mrNum;
  }

  addSoap() {
    const soap: Soap = {
      assessmentNote: this.assessment,
      objectiveNote: this.objective,
      planNote: this.plan,
      subjectiveNote: this.subjective,
      patient: {
        mrnum: this.mrNum
      },
      hospitalStaff: {
        email: this.loginService.getLoggedInUserEmail()
      }
    };
    this.soapService.addSoap(soap).subscribe(_ => this.dialogRef.close());
  }

  ngOnInit() { }
}
