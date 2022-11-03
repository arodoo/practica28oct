import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-tratamiento',
  templateUrl: './edit-tratamiento.component.html',
  styleUrls: ['./edit-tratamiento.component.css']
})
export class EditTratamientoComponent implements OnInit {
  editCitaForm!: FormGroup;
  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.editCitaForm = this.initForm();
  }

  onSubmit(): void {
    console.log('Form ->', this.editCitaForm.value);
  }

  initForm(): FormGroup {
    //Se declaran las propiedades del formulario
    //primer argumento el valor por defecto, el segundo validaciones con validators
    return this.fb.group({
      nombre_medicina: ['', Validators.required],
      veces_al_dia: ['', Validators.required],
      cantidad: ['', Validators.required],
      fecha_inicio: ['', Validators.required],
      fecha_fin: ['', Validators.required],
      comentarios: ['', Validators.required]
    })
  }

}
