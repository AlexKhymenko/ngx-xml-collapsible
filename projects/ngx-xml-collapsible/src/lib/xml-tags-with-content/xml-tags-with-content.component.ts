import { Component, forwardRef, input, OnInit, signal } from '@angular/core';
import { KeyValuePipe } from '@angular/common';
import { XmlContentComponent } from '../xml-content/xml-content.component';
import { XmlOpenCloseTagComponent } from '../xml-open-close-tag/xml-open-close-tag.component';

@Component({
  selector: 'app-xml-tags-with-content',
  standalone: true,
  imports: [
    KeyValuePipe,
    forwardRef(() => XmlContentComponent),
    XmlOpenCloseTagComponent,
  ],
  templateUrl: './xml-tags-with-content.component.html',
  styleUrl: './xml-tags-with-content.component.scss',
})
export class XmlTagsWithContentComponent implements OnInit {
  public internalId = signal(0);
  public showInnerData = signal<any>({});
  public xml = input<any>(undefined);

  public id = input(-1);
  public itemKey = input();

  public classes = signal([
    'ngx-xml-c-accent-color',
    'ngx-xml-c-success-color',
    'ngx-xml-c-info-color',
    'ngx-xml-c-warning-color',
    'ngx-xml-c-error-color',
  ]);

  ngOnInit(): void {
    this.setUpInternalId();
  }
  public isVisible(item: any): boolean {
    return this.showInnerData()[item];
  }

  public hide(key: any): void {
    const newItem = {
      ...this.showInnerData(),
      [key]: !this.showInnerData()[key],
    };
    this.showInnerData.set(newItem);
  }

  //Internal id is needed to cycle over classes
  //So different levels of xml have different colours
  private setUpInternalId(): void {
    //ignore not used keys
    if (this.itemKey() != 0 && this.itemKey() != '$') {
      const id = this.id() + 1;
      if (id > this.classes().length - 1) {
        this.internalId.set(0);
      } else {
        this.internalId.set(id);
      }
    } else {
      this.internalId.set(this.id());
    }
  }
}
