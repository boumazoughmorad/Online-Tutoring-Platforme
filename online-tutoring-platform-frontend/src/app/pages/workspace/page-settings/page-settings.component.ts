import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

interface Tab {
  name: string;
  route: string;
  icon: string;
}

interface PaymentHistory {
  date: string;
  description: string;
  amount: string;
  status: 'Completed' | 'Pending' | 'Failed';
}

@Component({
  selector: 'app-page-settings',
  templateUrl: './page-settings.component.html',
  imports:[NgIf,NgFor, CommonModule]
})
export class SettingsComponent {
  activeTab = 'account';

  tabs: Tab[] = [
    { name: 'Account', route: 'account', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
    { name: 'Password', route: 'password', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
    { name: 'Payment Methods', route: 'payment', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
    { name: 'Payment History', route: 'payment-history', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { name: 'Auto-Confirmation', route: 'auto-confirmation', icon: 'M5 13l4 4L19 7' },
    { name: 'Notifications', route: 'notifications', icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9' },
    { name: 'Delete Account', route: 'delete-account', icon: 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16' }
  ];

  paymentHistory: PaymentHistory[] = [
    { date: 'June 14, 2023', description: 'Advanced Mathematics - Dr. Sarah Johnson', amount: '$45.00', status: 'Completed' },
    { date: 'June 12, 2023', description: 'Chemistry Fundamentals - Prof. Michael Chen', amount: '$30.00', status: 'Completed' },
    { date: 'June 10, 2023', description: 'English Composition - Ms. Emily Rodriguez', amount: '$25.00', status: 'Completed' },
    { date: 'June 8, 2023', description: 'Computer Science - Dr. James Wilson', amount: '$50.00', status: 'Pending' }
  ];

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}