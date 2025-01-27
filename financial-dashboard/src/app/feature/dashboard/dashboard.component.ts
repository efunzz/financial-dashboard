import { Component } from '@angular/core';
import { CardComponent } from '../../ui/card/card.component';
import { ChartComponent } from '../../layout/chart/chart.component';
import { TableComponent } from '../../layout/table/table.component';
import { ListComponent } from '../../layout/list/list.component';
@Component({
  selector: 'app-dashboard',
  imports: [CardComponent, ChartComponent, TableComponent, ListComponent],
  template: `
  <h1 class="mb-10 text-3xl font-bold">Dashboard</h1>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
    <app-card 
        title="Money In" 
        [value]="'+$2,100'" 
        icon="pi-plus"
        iconBg="bg-emerald-100"
        iconColor="text-emerald-800"
        changeValue="24 new"
        changeText="since last visit"
        cardColor="bg-green"
    ></app-card>

    <app-card 
        title="Money Out" 
        [value]="'-$400'" 
        icon="pi-minus"
        iconBg="bg-orange-100"
        iconColor="text-orange-500"
        changeValue="%52+"
        changeText="since last week"
        cardColor="bg-red"
    ></app-card>

    <app-card 
        title="Money Left" 
        [value]="'$1,700'" 
        icon="pi-wallet"
        iconBg="bg-cyan-100"
        iconColor="text-cyan-500"
        changeValue="520"
        changeText="newly registered"
        cardColor="bg-blue"
    ></app-card>
</div>
    <h2 class="mt-10 text-3xl font-bold"> Overview </h2>
    <div class="mt-6  md:w-md lg:w-lg">
          <app-chart></app-chart>
    </div>
    <h2 class="mt-10 text-2xl font-bold"> Recent Transactions </h2>
    <div class="grid grid-cols-1 md:grid-cols-1  lg:grid-cols-2 gap-10">
      <div class="rounded-md w-[50rem]">
        <app-table></app-table>
      </div>
      <div>
        <app-list></app-list>
      </div>
    </div>
  `
  ,
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
