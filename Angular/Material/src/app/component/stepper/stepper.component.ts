import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStepperIntl } from '@angular/material';

export class TwStepperIntl extends MatStepperIntl {
  optionalLabel = '非必填';
}

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: [ './stepper.component.css' ],
  providers: [ { provide: MatStepperIntl, useClass: TwStepperIntl } ]
})
export class StepperComponent implements OnInit {

  isLinear: boolean;

  basicFormGroup: FormGroup;

  surveyForm: FormGroup;

  constructor() {
    this.basicFormGroup = new FormGroup({
      name: new FormControl('', Validators.required)
    });

    this.surveyForm = new FormGroup({
      basicQuestions: new FormGroup({
        name: new FormControl('', Validators.required)
      })
    });
  }

  ngOnInit() {
  }

}
