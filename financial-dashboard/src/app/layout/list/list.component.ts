import { Component } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-list',
  imports: [CheckboxModule, FormsModule],
  template: `
  <div class="p-6 bg-black text-off-white rounded-lg shadow-md h-10rem w-10rem ">
      <h3 class="text-lg font-semibold mb-2">Pending Payments</h3>
      
      <div class="flex items-center space-x-10 mb-2">
        <p-checkbox  [(ngModel)]="payments.rent" [binary]="true"></p-checkbox>
        <span>Rent</span>
      </div>

      <div class="flex items-center space-x-10 mb-2">
        <p-checkbox [(ngModel)]="payments.utilities" [binary]="true"></p-checkbox>
        <span>Utilities</span>
      </div>

      <div class="flex items-center space-x-10 mb-2">
        <p-checkbox [(ngModel)]="payments.internet" [binary]="true"></p-checkbox>
        <span>Internet</span>
      </div>
</div>

  
  `,
  styleUrl: './list.component.css'
})
export class ListComponent {
  payments = {
    rent: false,
    utilities: false,
    internet: false
  };

}
