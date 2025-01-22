import { Component, inject } from '@angular/core';
import { SidebarService } from '../service/sidebar.service';
import { MenuItem } from '../service/menu-item';
import { ProfileComponent } from '../profile/profile.component';
import { NavigationComponent } from '../navigation/navigation.component';


@Component({
  selector: 'app-sidebar',
  imports: [ProfileComponent, NavigationComponent],
  template:`
      <!-- Update to use p-drawer -->
      <aside class="h-screen w-64 bg-off-white text-black flex flex-col p-4 gap-y-64">
        <div> 
          <h2 class="text-5xl font-bold ml-4">HDB</h2>
        </div>
        <!-- Navigation Section -->
        <app-navigation [menuItems]="menuItems"></app-navigation>
        <!-- Profile Section -->
         <app-profile></app-profile>
      </aside>
  `,
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  menuItems: MenuItem[] = [];
  sidebarService = inject (SidebarService);

  constructor (){
    this.menuItems = this.sidebarService.getMenuItems();
  }

}
