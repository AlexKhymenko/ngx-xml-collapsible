import { TestBed } from '@angular/core/testing';

import { NgxXmlCollapsibleService } from './ngx-xml-collapsible.service';

describe('NgxXmlCollapsibleService', () => {
  let service: NgxXmlCollapsibleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxXmlCollapsibleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
