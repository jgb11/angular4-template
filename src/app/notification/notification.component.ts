import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { PushNotificationsService } from 'angular2-notifications';

@Component({
    selector: 'jgb-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

    constructor(private _pushNotifications: PushNotificationsService) {
    }

    ngOnInit() {
        this._pushNotifications.requestPermission();
    }

    sendPushNotification(): void {
        this._pushNotifications.create('Notification!', { icon: 'assets/img/sandglass_thumb.png' }).subscribe(
            res => console.log(res),
            err => console.log(err)
        );
    }

}
