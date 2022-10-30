import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditControlComponent } from './edit-control.component';

describe('EditControlComponent', () => {
  let component: EditControlComponent;
  let fixture: ComponentFixture<EditControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
