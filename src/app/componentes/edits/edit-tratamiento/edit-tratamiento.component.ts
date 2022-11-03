import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TratamientoService } from 'src/app/servicios/tratamiento/tratamiento.service';

@Component({
  selector: 'app-edit-tratamiento',
  templateUrl: './edit-tratamiento.component.html',
  styleUrls: ['./edit-tratamiento.component.css']
})
export class EditTratamientoComponent implements OnInit {

  editCitaForm: FormGroup;
  id: any | null;
  titulo = 'Agregar tratamiento';
  tratamientos: any;

  constructor(private readonly fb: FormBuilder,
    public tratamientoService: TratamientoService,
    private router: Router,
    private aRouter: ActivatedRoute) {
    this.editCitaForm = this.fb.group({
      nombre_medicina: ['', Validators.required],
      veces_al_dia: ['', Validators.required],
      cantidad: ['', Validators.required],
      fecha_inicio: ['', Validators.required],
      fecha_fin: ['', Validators.required],
      comentarios: ['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.isUpdate();
  }

  saveOrUpdate(): void {
    if (this.id === null) {
      this.save();
    }
    else {
      this.update(this.id)
    }
  }


  save(): void {
    this.tratamientoService.creteTratamiento(this.editCitaForm.value).subscribe(response => {
      this.router.navigate(['tratamientos'])
    },
      error => {
        console.error(error)
      }
    );
  }

  isUpdate() {
    if (this.id !== null) {
      this.titulo = 'Editar Tratamiento';
      this.tratamientoService.getTratamiento(this.id).subscribe(response => {
        // console.log(response.name);
        this.editCitaForm.setValue({
          nombre_medicina: response.nombre_medicina,
          veces_al_dia: response.veces_al_dia,
          cantidad: response.cantidad,
          fecha_inicio: response.fecha_inicio,
          fecha_fin: response.fecha_fin,
          comentarios: response.comentarios
        });
      });
    }
  }

  update(id: any) {
    const tratamiento: any = {
      nombre_medicina: this.editCitaForm.value.name,
      veces_al_dia: this.editCitaForm.value.las_name,
      cantidad: this.editCitaForm.value.email,
      fecha_inicio: this.editCitaForm.value.password,
      fecha_fin: this.editCitaForm.value.fecha_fin,
      comentarios: this.editCitaForm.value.comentarios
    };

    this.tratamientoService.updateTratamiento(id, tratamiento).subscribe(response => {
      this.router.navigate(['tratamientos']);
    },
      error => {
        console.error(error)
      }
    );
  }

  delete(tratamiento: any) {
    this.tratamientoService.deleteTratamiento(tratamiento.id).subscribe(response => {
      if (response.delete == true) {
        this.tratamientos.pop(tratamiento);
      }
    });
  }  
}



