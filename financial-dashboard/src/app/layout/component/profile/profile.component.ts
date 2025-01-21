import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  template: `
      <div class="flex flex-col items-center gap-3 p-3 mt-auto ">
          <img src="profile.jpg" alt="User Profile" class="w-15 h-28 rounded-lg">
          <span class="font-medium mt-2">Irfan Sofyan</span>
      </div>
  `,
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
