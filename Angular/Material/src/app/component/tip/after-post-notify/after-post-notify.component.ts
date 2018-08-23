import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-after-post-notify',
  templateUrl: './after-post-notify.component.html',
  styleUrls: [ './after-post-notify.component.css' ]
})
export class AfterPostNotifyComponent implements OnInit {

  get title() {
    return this.snackBarData.title;
  }

  constructor( private snackBar: MatSnackBar,
               @Inject(MAT_SNACK_BAR_DATA) private snackBarData: any ) {
  }

  ngOnInit() {
  }

  closeSnackBar() {
    this.snackBar.dismiss();
  }
}
