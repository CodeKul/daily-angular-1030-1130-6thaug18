import { Component } from '@angular/core';
import { SocialServiceService } from './social-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [SocialServiceService]
})
export class AppComponent {
  title = 'mysample';
  tm = 123

  
  
  tmsDt() {
    this.tm = new Date().getTime()
  }
}
