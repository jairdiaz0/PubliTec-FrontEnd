import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapituloDeLibroComponent } from './capitulo-de-libro.component';

describe('CapituloDeLibroComponent', () => {
  let component: CapituloDeLibroComponent;
  let fixture: ComponentFixture<CapituloDeLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapituloDeLibroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapituloDeLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
