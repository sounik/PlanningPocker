import { Component } from '@angular/core';
import { UserCardService } from '../services/user-card.service';

class User {
  public username : string = '';
  public isConnected : boolean = false;
  public selectedCard : number = -1;
  constructor(username : string,isConnected : boolean, selectedCard : number) {
    this.username = username;
    this.isConnected = isConnected;
    this.selectedCard = selectedCard;
  }
}

@Component({
  selector: 'app-joined-user',
  templateUrl: './joined-user.component.html',
  styleUrls: ['./joined-user.component.scss']
})
export class JoinedUserComponent {

  users : User[] = this.GetHardCodedUsers();
  constructor(private userCards:UserCardService) { }

  isCardsDisplayed(){
    return this.userCards.isDisplayed();
  }

  GetHardCodedUsers() : User[]{
    return [new User('Sounik',true,1),new User('Neel',false,5),new User('Mohor',false,3),new User('Rituparna',false,-1)
            ,new User('Sounik',true,1),new User('Neel',false,5),new User('Mohor',false,3),new User('Rituparna',false,-1)
            ,new User('Sounik',true,1),new User('Neel',false,5)
            ]
  }
}
