import { Component, input, output } from '@angular/core';
import { ChevronUpDownComponent } from '../../chevron-up-down/chevron-up-down.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-xml-open-tag',
  standalone: true,
  imports: [ChevronUpDownComponent, NgClass],
  templateUrl: './xml-open-tag.component.html',
  styleUrl: './xml-open-tag.component.scss',
})
export class XmlOpenTagComponent {
  public clicked = output();

  public key = input.required<any>();
  public selectedClass = input.required<string>();
  public isChevronDown = input.required<any>();
  public isKeyValid = input.required<any>();
}
