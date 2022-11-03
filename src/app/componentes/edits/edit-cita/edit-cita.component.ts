import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CitaService } from 'src/app/servicios/cita/cita.service';

@Component({
  selector: 'app-edit-cita',
  templateUrl: './edit-cita.component.html',
  styleUrls: ['./edit-cita.component.css']
})
export class EditCitaComponent implements OnInit {

  editCitaForm: FormGroup;
  id: any | null;
  titulo = 'Agregar cita'
  citas: any;

  constructor(public fb: FormBuilder,
    public citaService: CitaService,
    private router: Router,
    private activatedRouter: ActivatedRoute) {
    this.editCitaForm = this.fb.group({
      fecha: ['', Validators.required],
      lugar: ['', Validators.required],
      consulta: ['', Validators.required],
      medico: ['', Validators.required],
      motivo: ['', Validators.required]
    })

    this.id = this.activatedRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.isUpdate();
  }

  saveOrUpdate(): void {
    if (this.id == null) {
      this.save();
    } else {
      this.update(this.id)
    }
  }

  save(): void {
    this.citaService.creteCita(this.editCitaForm.value).subscribe(response => {
      this.router.navigate(['/citas'])
    },
      error => {
        console.log(error)
      }
    );
  }

  isUpdate() {
    if (this.id !== null) {
      this.titulo = 'Editar cita';
      this.citaService.getCita(this.id).subscribe(response => {
        this.editCitaForm.setValue({
          fecha: response.fecha,
          lugar: response.lugar,
          consulta: response.consulta,
          medico: response.medico,
          motivo: response.motivo
        });
      })
    }
  }

  update(id: any) {
    const cita: any = {
      fecha: this.editCitaForm.value.fecha,
      lugar: this.editCitaForm.value.lugar,
      consulta: this.editCitaForm.value.consulta,
      medico: this.editCitaForm.value.medico,
      motivo: this.editCitaForm.value.motivo
    };

    this.citaService.updateCita(id, cita).subscribe(response => {
      this.router.navigate(['citas'])
    },
      error => {
        console.log(error)
      })
  }

  delete(cita: any) {
    this.citaService.deleteCita(cita.id).subscribe(response => {
      if (response.delete == true) {
        this.citas.pop(cita);
      }
    });
  }
}
