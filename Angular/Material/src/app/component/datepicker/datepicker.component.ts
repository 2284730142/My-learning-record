import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { MatDatepickerInputEvent } from '@angular/material';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: [ './datepicker.component.css' ]
})
export class DatepickerComponent implements OnInit {

  startDate = moment(new Date(1999, 0, 1));
  minDate = moment('1999-1-5');
  maxDate = moment('1999-1-15');

  surveyForm: FormGroup;

  constructor() {
    this.surveyForm = new FormGroup({
      demo2: new FormControl({ value: '', disabled: false })
    });
  }

  ngOnInit() {
  }

  familyDayFilter( date: moment.Moment ): boolean {
    const day = date.day();
    return day !== 2 && day !== 5;
  }

  logDateInput( $event: MatDatepickerInputEvent<moment.Moment> ) {
    console.log($event);
  }

  logDateChange( $event: MatDatepickerInputEvent<moment.Moment> ) {
    console.log($event);
  }
}
