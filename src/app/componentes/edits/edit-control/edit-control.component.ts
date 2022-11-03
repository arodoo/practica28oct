import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-control',
  templateUrl: './edit-control.component.html',
  styleUrls: ['./edit-control.component.css']
})
export class EditControlComponent implements OnInit {
  editControlForm!: FormGroup;
  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.editControlForm = this.initForm();
  }

  onSubmit(): void {
    console.log('Form ->', this.editControlForm.value);
  }

  
  initForm(): FormGroup {
    //Se declaran las propiedades del formulario
    //primer argumento el valor por defecto, el segundo validaciones con validators
    return this.fb.group({
      fecha: ['', Validators.required],
      nombre: ['', Validators.required]
    })
  }

}
