import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-table',
  imports: [TableModule],
  template: `
<p-table [value]="transactions" [tableStyle]="{  'height':'12rem' }" >
    <ng-template #body let-transaction>
        <tr class=" hover:bg-gray-100 hover:text-black ">
            <td px-4 py-2 sm:px-6 md:px-8>
                <div class="flex items-center justify-center rounded-full w-10 h-10 {{transaction.bgColour}}">
                    <i class="{{ transaction.code }} {{ transaction.colour }} text-xl"></i>
                </div>
            </td>
            <td px-4 py-2 sm:px-6 md:px-8 >{{ transaction.name }}</td>
            <td px-4 py-2 sm:px-6 md:px-8>{{ transaction.category }}</td>
            <td px-4 py-2 sm:px-6 md:px-8>{{ transaction.quantity }}</td>
        </tr>
    </ng-template>
</p-table>

  
  `,
  styleUrl: './table.component.css'
})
export class TableComponent {

  transactions = [
    { code: 'pi pi-arrow-up-left', colour:'text-emerald-500', bgColour:'bg-green',name: 'Groceries', category: 'Needs', quantity: '$100' },
    { code: 'pi pi-arrow-down-right',colour:'text-orange-500',bgColour:'bg-red', name: 'Shopping', category: 'Wants', quantity: '$50' },
    { code: 'pi pi-arrow-up-left', colour:'text-emerald-500',bgColour:'bg-green',name: 'Insurance', category: 'Needs', quantity: '$200' },
    
  ];

}
