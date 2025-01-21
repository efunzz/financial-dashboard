import { Component, Input } from '@angular/core';
import { MenuItem } from '../../service/menu-item';

@Component({
  selector: 'app-navigation',
  imports: [],
  template: `
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
              </nav>`,
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  @Input() menuItems: MenuItem[] = [];
}
