import { Injectable } from '@angular/core';
import { TimerService } from 'src/app/Shared/timer/service/timer.service';

@Injectable({
  providedIn: 'root'
})
export class UserCardService {

  private displayCards : boolean = false ;
  private cardsEnabled : boolean = true ;
  constructor(private timer:TimerService) { }

  onDisplayCards(value : boolean) : void {
    this.displayCards = value;
  }

  isDisplayed() : boolean {
    if(this.timer.isRunning())
      return false;
    
    return this.displayCards;
  }

  isCardsEnabled() : boolean {
    if(this.timer.isRunning())
      return false;

    return this.cardsEnabled;
  }
}
