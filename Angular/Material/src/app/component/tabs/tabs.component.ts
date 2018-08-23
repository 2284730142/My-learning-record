import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from "@angular/material";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: [ './tabs.component.css' ]
})
export class TabsComponent implements OnInit {

  tabIndex = 0;

  constructor() {
  }

  ngOnInit() {
  }

  tabFocusChange( $event: MatTabChangeEvent ) {
    console.log(`focus變更，indx：${$event.index}`);
  }

  tabSelectedIndexChange( $event: number ) {
    console.log(`selectedIndex變更，index：${$event}`);
  }

  tabSelectedTabChange( $event: MatTabChangeEvent ) {
    console.log(`selectedTab變更，index：${$event.index}`);
  }

}
