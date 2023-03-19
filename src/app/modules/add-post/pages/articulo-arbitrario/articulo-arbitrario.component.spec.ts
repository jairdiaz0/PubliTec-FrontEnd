import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloArbitrarioComponent } from './articulo-arbitrario.component';

describe('ArticuloArbitrarioComponent', () => {
  let component: ArticuloArbitrarioComponent;
  let fixture: ComponentFixture<ArticuloArbitrarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticuloArbitrarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticuloArbitrarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
