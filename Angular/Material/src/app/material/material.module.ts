import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatRippleModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatMenuModule,
  MatStepperModule,
  MatInputModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MAT_DATE_LOCALE, MAT_DATE_FORMATS,
  MatSelectModule,
  MatFormFieldModule, MAT_LABEL_GLOBAL_OPTIONS,
  MatCheckboxModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatSliderModule,
  MatGridListModule,
  MatCardModule,
  MatProgressBarModule, MatProgressSpinnerModule,
  MatDialogModule,
  MatChipsModule, MatTooltipModule, MatSnackBarModule, MatExpansionModule, MatTabsModule, MatTableModule, MatSortModule,
  MatPaginatorModule,
} from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { LayoutModule } from '@angular/cdk/layout';

export const CH_FORMATS = {
  parse: {
    dateInput: 'YYYY/MM/DD'
  },
  display: {
    dateInput: 'YYYY/MM/DD',
    monthYearLabel: 'YYYY MMM',
    dateA11yLabel: 'YYYY/MM/DD',
    monthYearA11yLabel: 'YYYY MMM' // A11Y无障碍
  }
};

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatStepperModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatMomentDateModule,
    // MatNativeDateModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatGridListModule,
    MatCardModule,
    MatProgressBarModule, MatProgressSpinnerModule,
    MatDialogModule,
    MatChipsModule, MatTooltipModule, MatSnackBarModule,
    MatExpansionModule,
  ],
  exports: [
    MatButtonModule, // 按钮
    MatButtonToggleModule, // 按钮组
    MatIconModule, // Icon
    MatRippleModule, // 涟漪效果
    MatSidenavModule, // 滑动导航
    MatToolbarModule, // 导航条
    MatListModule, // 列表
    MatMenuModule, // 菜单
    MatStepperModule, // 操作群组化
    MatInputModule, // 表单组件
    MatAutocompleteModule, // 表单自动完成
    MatDatepickerModule, // 日期控件
    MatMomentDateModule, // 日期控件处理方式Moment形式(安装额外拓展@angular/material-moment-adapter moment)
    // MatNativeDateModule, // 日期控件处理方式原生形式
    MatSelectModule, // 选择控件
    MatFormFieldModule, // 表单域
    MatCheckboxModule, // 复选框
    MatRadioModule, // 单选
    MatSlideToggleModule, // 开关
    MatSliderModule, // 滑动
    MatGridListModule, // 网格
    MatCardModule, // 卡片
    MatProgressBarModule, MatProgressSpinnerModule, // （水平）显示进度 // （圆形）显示进度
    MatDialogModule, // 日志
    MatChipsModule, MatTooltipModule, MatSnackBarModule, // 小圆标签 // 提示工具 // 条
    MatExpansionModule, // 伸缩板
    MatTabsModule, // 标签
    MatTableModule, MatSortModule, MatPaginatorModule, // 列表 // 排序 // 分页
    LayoutModule, // 布局
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'zh-CN' }, // 为日历控件添加语言
    { provide: MAT_DATE_FORMATS, useValue: CH_FORMATS }, // 为日历控件添加格式
    { provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: { float: 'always' } }, // 设定表单域的label所有的都浮在上方
  ]
})
export class MaterialModule {
}
