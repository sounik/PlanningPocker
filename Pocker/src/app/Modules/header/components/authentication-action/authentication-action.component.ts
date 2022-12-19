import { Component } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';

@Component({
  selector: 'app-authentication-action',
  templateUrl: './authentication-action.component.html',
  styleUrls: ['./authentication-action.component.scss']
})
export class AuthenticationActionComponent {

  user :string = '';

  constructor(private msalService:MsalService) { }

  isLoggedIn():boolean{
    return this.msalService.instance.getActiveAccount() != null;
  }

  onLogin(){
    this.msalService.loginPopup()
      .subscribe((response:AuthenticationResult) => {
        this.msalService.instance.setActiveAccount(response.account);
        this.user = response.account?.name == undefined ? '' : response.account?.name;
      });
  }

  onLogout(){
    this.msalService.logout();
  }

}
