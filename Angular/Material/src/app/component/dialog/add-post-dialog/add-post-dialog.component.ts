import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-post-dialog',
  templateUrl: './add-post-dialog.component.html',
  styleUrls: [ './add-post-dialog.component.css' ]
})
export class AddPostDialogComponent implements OnInit {

  get title() {
    return this.data.title;
  }

  constructor( @Inject(MAT_DIALOG_DATA) private data: any,
               private dialogRef: MatDialogRef<AddPostDialogComponent>, ) {
    console.log(data.title);
  }

  @Output() doConfirm: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {

  }

  move() {
    this.dialogRef.updatePosition({
      top: '0',
      left: '0'
    });
  }

  confirm() {
    this.doConfirm.emit('click');
  }
}
