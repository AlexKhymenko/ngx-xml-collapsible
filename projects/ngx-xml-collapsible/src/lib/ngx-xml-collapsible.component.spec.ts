import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxXmlCollapsibleComponent } from './ngx-xml-collapsible.component';

describe('NgxXmlCollapsibleComponent', () => {
  let component: NgxXmlCollapsibleComponent;
  let fixture: ComponentFixture<NgxXmlCollapsibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxXmlCollapsibleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxXmlCollapsibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
