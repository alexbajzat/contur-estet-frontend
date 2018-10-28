import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AnnouncementComponent } from './components/announcement/announcement.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent, AnnouncementComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
