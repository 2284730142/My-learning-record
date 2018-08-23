import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AddPostDialogComponent } from './add-post-dialog/add-post-dialog.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: [ './dialog.component.css' ]
})
export class DialogComponent implements OnInit {

  title = '???';

  constructor( public dialog: MatDialog ) {
    this.dialog.afterAllClosed.subscribe(() => {
      console.log('目前已經沒有dialog了');
    });

    this.dialog.afterOpen.subscribe(( dialogRef: MatDialogRef<any> ) => {
      console.log(`新的dialog已開啟：${dialogRef.id}`);
      console.log(`目前已開啟 ${this.dialog.openDialogs.length} 個dialog了`);
    });
  }

  ngOnInit() {
  }

  showAddPostDialog() {
    const confirmDialogRef = this.dialog.open(AddPostDialogComponent, {
      data: {
        title: this.title,
      }
    }); // 也可以传入template , 第二个参数是配置项 , 会返回一个Ref类型回来
    // data:用data来给dialog传入一些信息
    // autoFocus:打开dialog时，是否focus在第一个控制项上
    // id:为打开的dialog定义一个确定的id
    // height、width、minHeight、minWidth、maxHeight和maxWidth,类型为字符串，（除了height和width一定要用字符串，剩下的可以给与数值，默认单位px）
    // hasBackdrop:是否显示背景
    // backdropClass:背景色，预设background: rgba(0,0,0,.6);
    // position:top、bottom、left和right
    // disableClose:是否允许ESC键关闭dialog

    console.log(confirmDialogRef);
    confirmDialogRef.componentInstance.doConfirm.subscribe(() => {
      console.log('開啟的dialog按下確認按鈕了');
    });
  }
}
