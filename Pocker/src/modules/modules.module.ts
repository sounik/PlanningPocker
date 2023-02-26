import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoinRoomModule } from './join-room/join-room.module';
import { HomeModule } from './home/home.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    JoinRoomModule,HomeModule
  ]
})
export class ModulesModule { }
