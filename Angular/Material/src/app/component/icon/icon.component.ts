import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: [ './icon.component.css' ]
})
export class IconComponent implements OnInit {

  constructor( private matIconRegistry: MatIconRegistry,
               private domSanitizer: DomSanitizer ) {
  }

  ngOnInit() {
    // 加载svg icon的方式,第三个参数是一个URL
    this.matIconRegistry.addSvgIconInNamespace(
      'custom-svg',
      'angular',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/angular_solidBlack.svg'));
  }

}
