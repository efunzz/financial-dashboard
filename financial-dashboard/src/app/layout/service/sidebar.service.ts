import { Injectable } from '@angular/core';
import { MenuItem } from './menu-item';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  getMenuItems(): MenuItem[] {
    return [
      { name: 'Dashboard', icon: 'pi pi-home', route: '/dashboard' },
      { name: 'Statistics', icon: 'pi pi-users', route: '/users' },
      { name: 'Pathway', icon: 'pi pi-compass', route: '/settings' },
      { name: 'Savings', icon: 'pi pi-money-bill', route: '/settings' },
    ];
  }
}
