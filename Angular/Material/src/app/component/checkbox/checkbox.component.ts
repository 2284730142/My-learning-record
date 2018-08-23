import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: [ './checkbox.component.css' ]
})
export class CheckboxComponent implements OnInit {

  surveyForm: FormGroup;

  indeterminateSelectedPayFor: boolean;

  constructor() {
    this.surveyForm = new FormGroup({
      mainQuestions: new FormGroup({
        payForAll: new FormControl(false),
        payForBook: new FormControl(false),
        payForMusic: new FormControl(false),
        payForMovie: new FormControl(true),
      }),
      angularLikeScore: new FormControl(),
      subscribeAngular: new FormControl(),
      subscribeAngularMaterial: new FormControl(),
      subscribeNgRx: new FormControl(),
    });
  }

  ngOnInit() {
    this._setSelectAllState();
  }

  checkAllChange( $event: MatCheckboxChange ) {
    this.surveyForm
      .get('mainQuestions')
      .get('payForBook')
      .setValue($event.checked);
    this.surveyForm
      .get('mainQuestions')
      .get('payForMusic')
      .setValue($event.checked);
    this.surveyForm
      .get('mainQuestions')
      .get('payForMovie')
      .setValue($event.checked);
    this._setSelectAllState();
  }

  payForChange() {
    this._setSelectAllState();
  }

  private _setSelectAllState() {
    const payForBook = this.surveyForm.get('mainQuestions').get('payForBook').value;
    const payForMusic = this.surveyForm.get('mainQuestions').get('payForMusic').value;
    const payForMovie = this.surveyForm.get('mainQuestions').get('payForMovie').value;
    const count = (payForBook ? 1 : 0) + (payForMusic ? 1 : 0) + (payForMovie ? 1 : 0);
    this.surveyForm.get('mainQuestions').get('payForAll').setValue(count === 3);
    this.indeterminateSelectedPayFor = count > 0 && count < 3;
  }

}
