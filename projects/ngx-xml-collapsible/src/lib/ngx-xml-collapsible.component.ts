import { Component, effect, input, signal } from '@angular/core';
import * as xml2js from 'xml2js';
import { KeyValuePipe, NgClass, NgForOf, NgIf } from '@angular/common';
import { ChevronUpDownComponent } from './chevron-up-down/chevron-up-down.component';
import { XmlCloseTagComponent } from './xml-open-close-tag/xml-close-tag/xml-close-tag.component';
import { XmlOpenTagComponent } from './xml-open-close-tag/xml-open-tag/xml-open-tag.component';
import { XmlContentComponent } from './xml-content/xml-content.component';
import { XmlOpenCloseTagComponent } from './xml-open-close-tag/xml-open-close-tag.component';
import { XmlTagsWithContentComponent } from './xml-tags-with-content/xml-tags-with-content.component';

@Component({
  selector: 'ngx-xml-collapsible',
  standalone: true,
  templateUrl: './ngx-xml-collapsible.component.html',
  styleUrls: ['./ngx-xml-collapsible.component.scss'],
  imports: [
    KeyValuePipe,
    NgIf,
    NgForOf,
    NgClass,
    ChevronUpDownComponent,
    XmlCloseTagComponent,
    XmlOpenTagComponent,
    XmlContentComponent,
    XmlOpenCloseTagComponent,
    XmlTagsWithContentComponent,
  ],
})
export class NgxXmlCollapsibleComponent {
  public xmlData = input<string>();
  public parsedXmlData = signal<any>(undefined);

  constructor() {
    const parseXmlOnChange = effect(
      () => {
        if (!this.xmlData()) {
          return;
        }
        this.parseXml(this.xmlData()).then((results) => {
          this.parsedXmlData.set(results);
        });
      },
      { allowSignalWrites: true },
    );
  }

  private parseXml(xml: any): Promise<string> {
    return new Promise((resolve, reject) => {
      xml2js.parseString(xml as any, (err: any, result: any) => {
        if (err) {
          throw new Error('Error parsing XML');
        }
        return resolve(result);
      });
    });
  }
}
