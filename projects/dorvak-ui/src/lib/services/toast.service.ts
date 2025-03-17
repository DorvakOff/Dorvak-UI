import { Injectable } from '@angular/core';

export type ToastConfig = {
  title: string;
  message: string;
  variant: 'primary' | 'secondary' | 'success' | 'destructive' | 'warning' | 'info';
  icon?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  alerts: (ToastConfig & { dismissing: boolean, id: string })[] = [];

  addToast(alert: ToastConfig) {
    let newAlert = {
      ...alert,
      id: Math.random().toString(36).substr(2, 9),
      dismissing: false
    }

    this.alerts.push(newAlert);

    setTimeout(() => {
      this.dismissAlert(newAlert.id);
    }, 5000);
  }

  private dismissAlert(id: string) {
    let alert = this.alerts.find(a => a.id === id);
    if (alert) {
      alert.dismissing = true;
      setTimeout(() => {
        this.alerts = this.alerts.filter(a => a.id !== id);
      }, 300);
    }
  }
}
