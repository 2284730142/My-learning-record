import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs/index';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: [ './layout.component.css' ]
})
export class LayoutComponent implements OnInit {

  isHandeset$: Observable<boolean>;

  constructor( private breakpointObserver: BreakpointObserver ) {
  }

  ngOnInit() {
    const isSmallScreen = this.breakpointObserver.isMatched('(max-width: 599px)');
    console.log(isSmallScreen);
    /*this.breakpointObserver.observe('(orientation: portrait)').subscribe(result => {
      console.log(`{portrait: ${result.matches}}`);
    });

    this.breakpointObserver.observe('(orientation: landscape)').subscribe(result => {
      console.log(`{landscape: ${result.matches}}`);
    });*/

    this.breakpointObserver.observe([ Breakpoints.HandsetLandscape, Breakpoints.HandsetPortrait ])
      .subscribe(result => {
        console.log(result);
      });
  }
}
