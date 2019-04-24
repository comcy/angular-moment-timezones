import { Component } from '@angular/core';
import * as moment from 'moment-timezone';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';

  ngOnInit() {

    const list = moment.tz.names();
    console.log('>>>', list);

    const listMatch = moment.tz().format('Z');
    console.log('>>> ###', listMatch);

    const currUserTz = moment.tz.guess(true);
    console.log('>>> >>>', currUserTz);

  }

}
