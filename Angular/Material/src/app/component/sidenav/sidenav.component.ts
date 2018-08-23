import { Component, OnInit } from '@angular/core';
import { MatDrawerToggleResult, MatSidenav } from '@angular/material';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: [ './sidenav.component.css' ]
})
export class SidenavComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  toggleSideNav( sideNav: MatSidenav ) {
    sideNav.toggle().then(( result: MatDrawerToggleResult ) => {
      console.log(sideNav);
      console.log(`侧边栏状态：${result}`);
    });
  }

  opened( e ) {
    console.log(e);
  }

  closed( e ) {
    console.log(e);
  }
}
