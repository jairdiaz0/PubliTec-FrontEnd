import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropiedadIntelectualComponent } from './propiedad-intelectual.component';

describe('PropiedadIntelectualComponent', () => {
  let component: PropiedadIntelectualComponent;
  let fixture: ComponentFixture<PropiedadIntelectualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropiedadIntelectualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropiedadIntelectualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
