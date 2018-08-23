import { Component, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: [ './button.component.css' ]
})
export class ButtonComponent implements OnInit {

  theme = 'custom-theme-1';

  constructor( private overlayContainer: OverlayContainer ) {
  }

  ngOnInit() {
    this.overlayContainer.getContainerElement().classList.add(this.theme);
  }

  toggleTheme() {
    const originalTheme = this.theme;
    this.theme = this.theme === 'custom-theme-1' ? 'custom-theme-2' : 'custom-theme-1';
    this.overlayContainer.getContainerElement().classList.remove(originalTheme);
    this.overlayContainer.getContainerElement().classList.add(this.theme);
  }

}
