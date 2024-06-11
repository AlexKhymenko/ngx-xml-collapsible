import { Component, input } from '@angular/core';

@Component({
  selector: 'app-chevron-up-down',
  standalone: true,
  imports: [],
  templateUrl: './chevron-up-down.component.html',
  styleUrl: './chevron-up-down.component.scss',
})
export class ChevronUpDownComponent {
  public chevronUp = input.required();
}
