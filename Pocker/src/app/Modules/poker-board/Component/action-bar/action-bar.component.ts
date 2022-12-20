import { Component } from '@angular/core';
import { TimerService } from 'src/app/Shared/timer/service/timer.service';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent {

  displayCards : boolean = false;

  constructor(private timer:TimerService) { }

  isTimerRunning(): boolean {
    if(this.timer.isRunning()){
      return true;
    }
    return false;
  }

  isCardsShown():boolean{
    return !this.isTimerRunning() && this.displayCards
  }
  
  onShowCards(e : any){
    this.displayCards =!!(e.checked);
  }

}
