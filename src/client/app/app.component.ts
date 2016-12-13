import { Component, ViewEncapsulation } from '@angular/core';
import { Config } from './shared/index';
import './operators';

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  constructor() {
    console.log('Environment config', Config);
  }
}
