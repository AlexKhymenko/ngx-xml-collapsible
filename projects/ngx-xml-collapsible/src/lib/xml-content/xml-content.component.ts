import { Component, computed, forwardRef, input } from '@angular/core';
import { XmlTagsWithContentComponent } from '../xml-tags-with-content/xml-tags-with-content.component';

@Component({
  selector: 'app-xml-content',
  standalone: true,
  imports: [forwardRef(() => XmlTagsWithContentComponent)],
  templateUrl: './xml-content.component.html',
  styleUrl: './xml-content.component.scss',
})
export class XmlContentComponent {
  public internalId = input.required<any>();
  public itemKey = input.required();
  public itemValue = input.required();

  public isKeyValid = computed(() => {
    return this.itemKey() != '$';
  });

  public isObject(item: any): boolean {
    return item instanceof Object;
  }
}
