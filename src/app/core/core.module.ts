import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { TopBarComponent } from './shell/top-bar/top-bar.component';
import { MainContentComponent } from './shell/main-content/main-content.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';

import { PushNotificationsService } from 'angular2-notifications';

const routes: Routes = [
  {
    path: '',
    loadChildren: './../home/home.module#HomeModule'
  },
  {
    path: 'about',
    loadChildren: './../about/about.module#AboutModule'
  },
  {
    path: 'notification',
    loadChildren: './../notification/notification.module#NotificationModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    SharedModule
  ],
  declarations: [
    ShellComponent,
    TopBarComponent,
    MainContentComponent
  ],
  providers: [PushNotificationsService],
  exports: [ShellComponent]
})
export class CoreModule { }
