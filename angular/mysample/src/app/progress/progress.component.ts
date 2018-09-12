import { Component, OnInit, Input } from '@angular/core';
import { SocialServiceService } from '../social-service.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  sty  = {
    width : `1%`
  }

  constructor(
    private scl : SocialServiceService
  ) {
    this.scl.onProgress( prg => this.sty.width = `${prg}%`)
   }

  ngOnInit() {
  }
}
