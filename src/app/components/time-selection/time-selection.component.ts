import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-time-selection',
  templateUrl: './time-selection.component.html',
  styleUrls: ['./time-selection.component.css']
})
export class TimeSelectionComponent implements OnInit {
  hourOptions = new Array(12).fill(null).map((d, i) => i + 1);
  minuteOptions = new Array(12).fill(null).map((d, i) => i * 5);
  selection: { hour?: number; minute?: number; amPM?: string } = {};

  @Output()
  select = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onSelect(selection) {
    this.selection = {
      ...this.selection,
      ...selection
    };

    if (this.isSelectionComplete(this.selection)) {
      this.select.emit(this.selection);
    }
  }

  isSelectionComplete(selection) {
    return Object.keys(selection).length === 3;
  }
}
