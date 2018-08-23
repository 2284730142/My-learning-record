import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [ './progress.component.css' ]
})
export class ProgressComponent implements OnInit {

  progress = 60;

  // 线条粗细
  strokeWidth = 1;

  // 直径大小
  diameter = 100;

  constructor() {
  }

  ngOnInit() {
  }

}
