import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Alert, AlertType } from '../models/alert';
import { Subscription } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';
import { AlertService } from '../services/alerts/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit, OnDestroy {
  
  @Input() id     = 'default-alert';
  @Input() fade   = true;

  alerts: Alert[] = [];

  alertSubscription: Subscription;
  routeSubscription: Subscription;

  constructor(private router: Router, private alertService: AlertService) { }

  ngOnInit(): void {
    this.alertSubscription = this.alertService.onAlert(this.id)
    .subscribe((alert) => {
        if (!alert.message) {
          this.alerts = this.alerts.filter(notify => notify.keepAfterRouteChange);
          this.alerts.forEach(notify => delete notify.keepAfterRouteChange);
          return;
        }
        this.alerts.push(alert);

        if(alert.autoClose) {
          setTimeout(() => this.removeAlert(alert), 4500);
        }
      });
     
      this.routeSubscription = this.router.events.subscribe(event => {
        if (event instanceof NavigationStart) {
            this.alertService.clear(this.id);
        }
    });
  }

  ngOnDestroy() {
    this.alertSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }

  removeAlert(alert: Alert) {
    if (!this.alerts.includes(alert)) return;

    if(this.fade){
      this.alerts.find(notify => notify === alert).fade = true;

      setTimeout(() => {
        this.alerts = this.alerts.filter(notify => notify !== alert);
      }, 250);
    } else {
      this.alerts = this.alerts.filter(x => x !== alert);
    }
  }

  constructAlertStylings(alert: Alert) {
    if (!alert) return;

    const additionalClasses = ['alert', 'alert-dismissable'];
            
    const notificationTypes = {
        [AlertType.Success]: 'alert alert-success',
        [AlertType.Error]: 'alert alert-danger',
        [AlertType.Info]: 'alert alert-info',
        [AlertType.Warning]: 'alert alert-warning'
    }

    additionalClasses.push(notificationTypes[alert.type]);

    if(alert.fade) {
      additionalClasses.push('fade');
    }

    return additionalClasses.join(' ');
  }

}
