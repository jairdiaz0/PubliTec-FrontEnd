import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPDFPageComponent } from './view-pdfpage.component';

describe('ViewPDFPageComponent', () => {
  let component: ViewPDFPageComponent;
  let fixture: ComponentFixture<ViewPDFPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPDFPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPDFPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
