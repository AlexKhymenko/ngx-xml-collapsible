import { Component, input, output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-xml-close-tag',
  standalone: true,
  imports: [NgClass],
  templateUrl: './xml-close-tag.component.html',
  styleUrl: './xml-close-tag.component.scss',
})
export class XmlCloseTagComponent {
  public clicked = output();

  public key = input.required<any>();
  public selectedClass = input.required<string>();
  public isKeyValid = input.required<boolean>();
}
