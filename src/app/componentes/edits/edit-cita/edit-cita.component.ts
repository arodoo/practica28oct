import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-cita',
  templateUrl: './edit-cita.component.html',
  styleUrls: ['./edit-cita.component.css']
})
export class EditCitaComponent implements OnInit {
  editCitaForm!: FormGroup;
  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.editCitaForm = this.initForm();
  }

  onSubmit(): void {
    console.log('Form ->');
  }

  initForm(): FormGroup {
    //Se declaran las propiedades del formulario
    //primer argumento el valor por defecto, el segundo validaciones con validators
    return this.fb.group({
      fecha: ['', Validators.required],
      lugar: ['', Validators.required],
      consulta: ['', Validators.required],
      medico: ['', Validators.required],
      motivo: ['', Validators.required]
    })
  }
}
