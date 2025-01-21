import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  template:`
      <aside class="h-screen w-64 bg-off-white text-black flex flex-col p-4 gap-y-64">
        <!-- Navigation Section -->
        <div> 
          <h2 class="text-4xl font-bold">HDB</h2>
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
        <div class="flex flex-col items-center gap-3 p-3 mt-auto bg-gray-300 rounded-lg">
          <img src="profile.jpg" alt="User Profile" class="w-15 h-20 rounded-full">
          <span class="font-medium">Irfan Sofyan</span>
        </div>
        
      </aside>
  
  
  `,
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  menuItems = [
    { name: 'Dashboard', icon: 'pi pi-home', route: '/dashboard' },
    { name: 'Statistics', icon: 'pi pi-users', route: '/users' },
    { name: 'Pathway', icon: 'pi pi-compass', route: '/settings' },
    { name: 'Savings', icon: 'pi pi-money-bill', route: '/settings' },
  ];

}
