import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDidacticoComponent } from './material-didactico.component';

describe('MaterialDidacticoComponent', () => {
  let component: MaterialDidacticoComponent;
  let fixture: ComponentFixture<MaterialDidacticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialDidacticoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialDidacticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
