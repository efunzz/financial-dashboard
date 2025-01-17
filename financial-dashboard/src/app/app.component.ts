import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ButtonModule} from 'primeng/button'

@Component({
  selector: 'app-root',
  imports: [ ButtonModule],
  template: `
  <div class="card flex justify-center">
    <p-button label="Check" />
  </div>
  
  
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'financial-dashboard';
}
