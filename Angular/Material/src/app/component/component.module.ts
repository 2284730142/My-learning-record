import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { ComponentComponent } from './component/component.component';
import { ButtonComponent } from './button/button.component';
import { IconComponent } from './icon/icon.component';
import { RippleComponent } from './ripple/ripple.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ListComponent } from './list/list.component';
import { MenuComponent } from './menu/menu.component';
import { StepperComponent } from './stepper/stepper.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { SelectComponent } from './select/select.component';
import { FormfieldComponent } from './formfield/formfield.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { SliderComponent } from './slider/slider.component';
import { GridlistComponent } from './gridlist/gridlist.component';
import { CardComponent } from './card/card.component';
import { ProgressComponent } from './progress/progress.component';
import { DialogComponent } from './dialog/dialog.component';
import { AddPostDialogComponent } from './dialog/add-post-dialog/add-post-dialog.component';
import { TipComponent } from './tip/tip.component';
import { AfterPostNotifyComponent } from './tip/after-post-notify/after-post-notify.component';
import { ExpansionpanelsComponent } from './expansionpanels/expansionpanels.component';
import { TabsComponent } from './tabs/tabs.component';
import { TablesComponent } from './tables/tables.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: 'component',
    component: ComponentComponent,
    children: [
      // { path: 'chain', component: ChainComponent },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    ComponentComponent,
    ButtonComponent,
    IconComponent,
    RippleComponent,
    SidenavComponent,
    ToolbarComponent,
    ListComponent,
    MenuComponent,
    StepperComponent,
    InputComponent,
    DatepickerComponent,
    SelectComponent,
    FormfieldComponent,
    CheckboxComponent,
    SliderComponent,
    GridlistComponent,
    CardComponent,
    ProgressComponent,
    DialogComponent,
    AddPostDialogComponent,
    TipComponent,
    AfterPostNotifyComponent,
    ExpansionpanelsComponent,
    TabsComponent,
    TablesComponent,
    LayoutComponent
  ],
  entryComponents: [ AddPostDialogComponent, AfterPostNotifyComponent ]
})
export class ComponentModule {
}
