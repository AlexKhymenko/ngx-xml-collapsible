import { Component, computed, input, output } from '@angular/core';
import { XmlOpenTagComponent } from './xml-open-tag/xml-open-tag.component';
import { XmlCloseTagComponent } from './xml-close-tag/xml-close-tag.component';
import { NgxCollapseAnimatedDirective } from 'ngx-collapse-animated';

@Component({
  selector: 'app-xml-open-close-tag',
  standalone: true,
  imports: [
    XmlOpenTagComponent,
    XmlCloseTagComponent,
    NgxCollapseAnimatedDirective,
  ],
  templateUrl: './xml-open-close-tag.component.html',
  styleUrl: './xml-open-close-tag.component.scss',
})
export class XmlOpenCloseTagComponent {
  public clicked = output();

  public key = input.required<any>();
  public selectedClass = input.required<string>();
  public isChevronDown = input.required<any>();

  public isKeyValid = computed(() => {
    return this.key() != 0 && this.key() != '$';
  });
}
