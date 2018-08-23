import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: [ './slider.component.css' ]
})
export class SliderComponent implements OnInit {

  surveyForm: FormGroup;

  get selectedColorRed() {
    return this.surveyForm.get('otherQuestions').get('favoriteColorRed').value;
  }

  get selectedColorGreen() {
    return this.surveyForm.get('otherQuestions').get('favoriteColorGreen').value;
  }

  get selectedColorBlue() {
    return this.surveyForm.get('otherQuestions').get('favoriteColorBlue').value;
  }

  // 組合顏色樣式
  get selectedColorStyle() {
    return `rgb(${this.selectedColorRed}, ${this.selectedColorGreen}, ${this.selectedColorBlue})`;
  }

  constructor() {
    this.surveyForm = new FormGroup({
      otherQuestions: new FormGroup({
        favoriteColorRed: new FormControl(0),
        favoriteColorGreen: new FormControl(0),
        favoriteColorBlue: new FormControl(0),
        surveyScore: new FormControl(0),
      })
    });
  }

  ngOnInit() {
  }

}
