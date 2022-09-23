import { Component } from '@angular/core';
import { LoggerService as Logger } from './services/logger.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Logger';

  ngOnInit() {
    Logger.debug('logger DEBUG message', { message: 'message'});
    Logger.log('logger INFO message', { message: 'message'});
    Logger.warn('logger WARN message', { message: 'message'});
    Logger.error('logger ERROR message', { message: 'message'});
  }
}
