import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppPageComponent } from './app-page/app-page.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [
    AppHeaderComponent,
    AppFooterComponent,
    AppPageComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule
  ],
  exports:[
    AppHeaderComponent,AppFooterComponent,AppPageComponent
  ]
})
export class AppComponentModule { }
