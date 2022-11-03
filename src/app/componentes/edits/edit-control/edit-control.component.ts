import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ControlService } from 'src/app/servicios/control/control.service';

@Component({
  selector: 'app-edit-control',
  templateUrl: './edit-control.component.html',
  styleUrls: ['./edit-control.component.css']
})
export class EditControlComponent implements OnInit {

  editControlForm: FormGroup;
  id: any | null;
  titulo = 'Agregar control';
  controles: any;

  constructor(private readonly fb: FormBuilder,
    public controlService: ControlService,
    private router: Router,
    private aRouter: ActivatedRoute) {
    this.editControlForm = this.fb.group({
      fecha: ['', Validators.required],
      nombre: ['', Validators.required]
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
    this.controlService.creteControl(this.editControlForm.value).subscribe(response => {
      this.router.navigate(['controles'])
    },
      error => {
        console.error(error)
      }
    );
  }

  isUpdate() {
    if (this.id !== null) {
      this.titulo = 'Editar usuario';
      this.controlService.getControl(this.id).subscribe(response => {
        this.editControlForm.setValue({
          fecha: response.fecha,
          nombre: response.nombre,
        });
      });
    }
  }

  update(id: any) {
    const control: any = {
      fecha: this.editControlForm.value.fecha,
      nombre: this.editControlForm.value.nombre
    };
    this.controlService.updateControl(id, control).subscribe(response => {
      this.router.navigate(['controles']);
    },
      error => {
        console.error(error)
      }
    );
  }
  delete(control: any) {
    this.controlService.deleteControl(control.id).subscribe(response => {
      if (response.delete == true) {
        this.controles.pop(control);
      }
    });
  }
}
