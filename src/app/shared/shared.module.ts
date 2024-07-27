import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    MainHeaderComponent,
    MainFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    MainHeaderComponent,
    MainFooterComponent
  ]
})
export class SharedModule { }
