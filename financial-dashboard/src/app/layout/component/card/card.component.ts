import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  template: `

  <div class="shadow-lg p-4 rounded" [class]="cardColor">
    <div class="flex justify-between mb-3">
        <div>
            <span class="block text-gray-500 font-medium mb-3">{{ title }}</span>
            <div class="text-gray-900 font-medium text-xl">{{ value }}</div>
        </div>
        <div class="flex items-center justify-center rounded-full w-10 h-10" [class]="iconBg">
            <i class="pi text-xl" [class]="[icon, iconColor]"></i>
        </div>
    </div>
    <span class="text-green-500 font-medium">{{ changeValue }}</span>
    <span class="text-gray-500">{{ changeText }}</span>
</div>
`,
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() title!: string;
  @Input() value!: string | number;
  @Input() icon!: string;
  @Input() iconBg!: string;
  @Input() iconColor!: string;
  @Input() changeText!: string;
  @Input() changeValue!: string;
  @Input() cardColor!: string;

}
