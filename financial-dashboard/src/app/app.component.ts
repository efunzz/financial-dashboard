import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { DashboardComponent } from './feature/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  imports: [ SidebarComponent, DashboardComponent],
  template: `
    <div class="layout-container flex">
      <!-- Sidebar -->
      <app-sidebar></app-sidebar>

      <!-- Dashboard / Main Content -->
      <div class="main-content flex-grow p-4">
        <app-dashboard></app-dashboard>
      </div>
    </div>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'financial-dashboard';
}
