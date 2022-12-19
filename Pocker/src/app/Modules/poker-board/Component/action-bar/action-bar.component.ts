import { Component } from '@angular/core';
import { TimerService } from 'src/app/Shared/timer/service/timer.service';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent {

  constructor(private timer:TimerService) { }

  isTimerRunning(): boolean {
    return this.timer.isRunning();
  }

}
