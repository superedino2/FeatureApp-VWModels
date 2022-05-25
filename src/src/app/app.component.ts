import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'vw-models',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  @Input() title = 'Superedinos World';

  constructor() {
    console.log('SUPEREDINO');

  }
}
