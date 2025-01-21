import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './layout/component/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  imports: [ SidebarComponent],
  template: `
     <app-sidebar></app-sidebar>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'financial-dashboard';
}
