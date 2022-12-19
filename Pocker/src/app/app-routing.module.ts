import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokerBoardComponent } from './Modules/poker-board/poker-board.component';
import { HomeComponent } from './Modules/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent },
  {path: 'pockerboard', component: PokerBoardComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
