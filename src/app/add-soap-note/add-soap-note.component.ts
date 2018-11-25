import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-soap-note',
  templateUrl: './add-soap-note.component.html',
  styleUrls: ['./add-soap-note.component.css']
})
export class AddSoapNoteComponent implements OnInit {
  mrNum;
  constructor(@Inject(MAT_DIALOG_DATA) data: any) {
    this.mrNum = data.mrNum;
  }

  ngOnInit() {}
}
