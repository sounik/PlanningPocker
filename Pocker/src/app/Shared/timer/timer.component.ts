import { Component } from '@angular/core';
import { TimerService } from './service/timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {

  constructor(private timer : TimerService ) { }
  onChange(value : string){
    this.handleActionChange(value)
  }
  getTime() : string{
    return this.timer.getTime();
  }

  private handleActionChange(value : string) : void{
    switch(value) { 
      case 'reset': { 
        this.timer.resetTimer();
        break; 
      } 
      default: { 
        this.timer.toggleTimer();
         break; 
      } 
   } 
  }

}
