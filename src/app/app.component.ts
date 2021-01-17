import { Computer } from './classes/computer';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularDataForm';

  // computers list, array of computers
  computers: Array<Computer> = new Array<Computer>();
}
