import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
@Component({
  selector: 'app-dashboard',
  imports: [CardComponent],
  template: `
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <app-card 
        title="Orders" 
        [value]="152" 
        icon="pi-shopping-cart"
        iconBg="bg-blue-100"
        iconColor="text-blue-500"
        changeValue="24 new"
        changeText="since last visit"
        cardColor="bg-green"
    ></app-card>

    <app-card 
        title="Revenue" 
        [value]="'$2,100'" 
        icon="pi-map-marker"
        iconBg="bg-orange-100"
        iconColor="text-orange-500"
        changeValue="%52+"
        changeText="since last week"
        cardColor="bg-red"
    ></app-card>

    <app-card 
        title="Customers" 
        [value]="28441" 
        icon="pi-inbox"
        iconBg="bg-cyan-100"
        iconColor="text-cyan-500"
        changeValue="520"
        changeText="newly registered"
        cardColor="bg-blue"
    ></app-card>
</div>
  `
  ,
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
