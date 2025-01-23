import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-table',
  imports: [TableModule],
  template: `
<p-table [value]="products" [tableStyle]="{ 'max-width': '50rem' }" >
    <ng-template #header>
        <tr class="bg-gray-100">
            <th class="px-4 py-2 text-left  ">Code</th>
            <th class="px-4 py-2 text-left ">Name</th>
            <th class="px-4 py-2 text-left ">Category</th>
            <th class="px-4 py-2 text-left ">Quantity</th>
        </tr>
    </ng-template>
    <ng-template #body let-product>
        <tr class=" hover:bg-gray-100 border-b border-gray-300 mb-2 ">
            <td class="px-4 py-2  ">{{ product.code }}</td>
            <td class="px-4 py-2 ">{{ product.name }}</td>
            <td class="px-4 py-2 ">{{ product.category }}</td>
            <td class="px-4 py-2 ">{{ product.quantity }}</td>
        </tr>
    </ng-template>
</p-table>

  
  `,
  styleUrl: './table.component.css'
})
export class TableComponent {

  products = [
    { code: 'pi pi-arrow-circle-up', name: 'Product A', category: 'Category 1', quantity: 100 },
    { code: 'pi pi-arrow-circle-down', name: 'Product B', category: 'Category 2', quantity: 50 },
    { code: 'pi pi-arrow-circle-left', name: 'Product C', category: 'Category 3', quantity: 200 },
    
  ];

}
