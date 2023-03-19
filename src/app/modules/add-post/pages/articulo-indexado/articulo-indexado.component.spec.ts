import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloIndexadoComponent } from './articulo-indexado.component';

describe('ArticuloIndexadoComponent', () => {
  let component: ArticuloIndexadoComponent;
  let fixture: ComponentFixture<ArticuloIndexadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticuloIndexadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticuloIndexadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
