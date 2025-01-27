import { Component, inject } from '@angular/core';
import { SidebarService } from '../service/sidebar.service';
import { MenuItem } from '../service/menu-item';
import { ProfileComponent } from '../profile/profile.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    ProfileComponent, 
    NavigationComponent,
    DrawerModule,
    ButtonModule
  ],
  template: `
    <!-- Desktop Sidebar -->
    <aside class="hidden lg:flex h-screen w-64 bg-off-white text-black flex-col p-4 gap-y-60">
      <div>
        <h2 class="text-5xl font-bold ml-4">HDB</h2>
      </div>
      <app-navigation [menuItems]="menuItems"></app-navigation>
      <app-profile></app-profile>
    </aside>

    <!-- Mobile Drawer -->
    <p-drawer [(visible)]="drawerVisible" 
              [showCloseIcon]="false"
              position="left"
              styleClass="custom-drawer"
              [style]="{'background-color': '#F5F5F5'}"
              >
              <!-- Custom Close Icon -->
            <button pButton 
                    icon="pi pi-times" 
                    (click)="drawerVisible = false"
                    style="position: absolute; top: 20px; right: 20px; z-index: 999;" 
                    class="p-button-text"></button>
      <div class="flex flex-col p-4 gap-y-64">
        <div>
          <h2 class="text-5xl font-bold ml-4">HDB</h2>
        </div>
        <app-navigation [menuItems]="menuItems"></app-navigation>
        <app-profile></app-profile>
      </div>
    </p-drawer>

    <!-- Hamburger button -->
    <button pButton 
            icon="pi pi-bars" 
            (click)="toggleDrawer()"
            class="p-button-text lg:hidden top-4 left-4 z-50">
    </button>
  `,
})
export class SidebarComponent {
  menuItems: MenuItem[] = [];
  drawerVisible = false;
  sidebarService = inject(SidebarService);

  constructor() {
    this.menuItems = this.sidebarService.getMenuItems();
  }

  toggleDrawer() {
    this.drawerVisible = !this.drawerVisible;
  }
}