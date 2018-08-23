import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formfield',
  templateUrl: './formfield.component.html',
  styleUrls: [ './formfield.component.css' ]
})
export class FormfieldComponent implements OnInit {

  surveyForm: FormGroup;

  constructor() {
    this.surveyForm = new FormGroup({
      name: new FormControl('')
    });
  }

  ngOnInit() {
  }

}
