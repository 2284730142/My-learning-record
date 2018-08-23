import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: [ './select.component.css' ]
})
export class SelectComponent implements OnInit {

  interestList = [
    {
      id: 1,
      name: '排球'
    },
    {
      id: 2,
      name: '网球'
    },
    {
      id: 3,
      name: '台球'
    },
  ];

  nestInterestList = [
    {
      name: '球类',
      subItems: this.interestList
    },
    {
      name: '其他',
      subItems: [
        {
          id: 4,
          name: '跑步'
        },
        {
          id: 5,
          name: '游泳'
        },
      ]
    },
  ];

  surveyForm: FormGroup;

  constructor() {
    this.surveyForm = new FormGroup({
      interest: new FormControl('')
    });
  }

  ngOnInit() {
  }

}
