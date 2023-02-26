import { Component } from '@angular/core';
import { UserCardService } from '../services/user-card.service';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent {

  constructor(private userCards:UserCardService) { }

  isCardSwitchDisabled(): boolean {
    return !this.userCards.isCardsEnabled();
  }

  isCardsShown():boolean{
    return this.userCards.isDisplayed()
  }
  
  onShowCards(e : any){
    this.userCards.onDisplayCards(!!(e.checked));
  }

}
