import { Component, inject } from '@angular/core';
import { SidebarService } from '../../service/sidebar.service';
import { MenuItem } from '../../service/menu-item';


@Component({
  selector: 'app-sidebar',
  imports: [],
  template:`
      <aside class="h-screen w-64 bg-off-white text-black flex flex-col p-4 gap-y-64">
        <!-- Navigation Section -->
        <div> 
          <h2 class="text-5xl font-bold ml-4">HDB</h2>
        </div>
        <div>
            <nav class=" pt-1">
                <ul>
                  @for (item of menuItems; track item.name) {
                    <li>
                      <a  class="flex items-center gap-3 p-3 rounded-md hover:bg-gray-300">
                        <i [class]="item.icon"></i>
                        {{ item.name }}
                      </a>
                    </li>
                  }
                </ul>
              </nav>
        </div>
        <!-- Profile Section -->
        <div class="flex flex-col items-center gap-3 p-3 mt-auto ">
          <img src="profile.jpg" alt="User Profile" class="w-15 h-28 rounded-lg">
          <span class="font-medium mt-2">Irfan Sofyan</span>
        </div>
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
