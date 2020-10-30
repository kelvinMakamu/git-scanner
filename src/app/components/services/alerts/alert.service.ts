import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Alert, AlertType } from '../../models/alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  
  private _subject   = new Subject<Alert>();
  private _defaultId = 'default-alert';

  onAlert(id = this._defaultId): Observable<Alert> {
    return this._subject.asObservable().pipe(filter(notify => notify && notify.id === id));
  }
  
  success(message: string, options?: any) {
    this.alert(new Alert({ ...options, type: AlertType.Success, message }));
  }

  danger(message: string, options?: any) {
    this.alert(new Alert({ ...options, type: AlertType.Error, message }));
  }

  info(message: string, options?: any) {
    this.alert(new Alert({ ...options, type: AlertType.Info, message }));
  }

  warn(message: string, options?: any) {
    this.alert(new Alert({ ...options, type: AlertType.Warning, message }));
  }
 
  alert(alert: Alert) {
    alert.id = alert.id || this._defaultId;
    this._subject.next(alert);
  }

  clear(id = this._defaultId) {
    this._subject.next(new Alert({ id }));
  }
}
