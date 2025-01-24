import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-table',
  imports: [TableModule],
  template: `
<p-table [value]="transactions" [tableStyle]="{ 'width': '50rem', 'height':'12rem' , 'border':'none' }" >
    <ng-template #body let-transaction>
        <tr class=" hover:bg-gray-100 mb-2  border-none">
            <td class="px-4 py-2  "><i class="{{ transaction.code }} text-orange-500"></i></td>
            <td class="px-4 py-2 ">{{ transaction.name }}</td>
            <td class="px-4 py-2 ">{{ transaction.category }}</td>
            <td class="px-4 py-2 ">{{ transaction.quantity }}</td>
        </tr>
    </ng-template>
</p-table>

  
  `,
  styleUrl: './table.component.css'
})
export class TableComponent {

  transactions = [
    { code: 'pi pi-arrow-circle-up', name: 'Groceries', category: 'Needs', quantity: 100 },
    { code: 'pi pi-arrow-circle-down', name: 'Shopping', category: 'Wants', quantity: 50 },
    { code: 'pi pi-arrow-circle-left', name: 'Insurance', category: 'Needs', quantity: 200 },
    
  ];

}
