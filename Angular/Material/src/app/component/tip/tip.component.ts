import { Component, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent, MatSnackBar } from '@angular/material';
import { AfterPostNotifyComponent } from './after-post-notify/after-post-notify.component';

@Component({
  selector: 'app-tip',
  templateUrl: './tip.component.html',
  styleUrls: [ './tip.component.css' ]
})
export class TipComponent implements OnInit {

  tags = [ 'JavaScript', 'Material Design', 'Angular Material' ];
  separatorKeysCodes = [ ENTER, COMMA ];

  title = 'ssss';

  constructor( private snackBar: MatSnackBar ) {
  }

  ngOnInit() {
  }

  removeTag( tagName ) {
    console.log(tagName);
    this.tags = this.tags.filter(tag => tag !== tagName);
  }

  addTag( $event: MatChipInputEvent ) {
    if ( ($event.value || '').trim() ) {
      const value = $event.value.trim();
      if ( this.tags.indexOf(value) === -1 ) {
        this.tags.push(value);
      }
    }

    $event.input.value = '';
  }

  confirm() {
    this.snackBar.open('已新增部落格文章', '我知道了');
  }

  open1() {
    this.snackBar.openFromComponent(AfterPostNotifyComponent,
      {
        data: { title: this.title }
      });
    // duration:多少ms后自动关闭SnackBar
    // horizontalPosition:center,left,right,before,after
    // verticalPosition:top,bottom
  }
}
