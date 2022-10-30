import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTratamientoComponent } from './edit-tratamiento.component';

describe('EditTratamientoComponent', () => {
  let component: EditTratamientoComponent;
  let fixture: ComponentFixture<EditTratamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTratamientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTratamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
