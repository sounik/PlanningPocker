import { Component } from '@angular/core';
import { UserCardService } from '../services/user-card.service';

@Component({
  selector: 'app-joined-user',
  templateUrl: './joined-user.component.html',
  styleUrls: ['./joined-user.component.scss']
})
export class JoinedUserComponent {

  constructor(private userCards:UserCardService) { }

  isCardsDisplayed(){
    return this.userCards.isDisplayed();
  }
}
