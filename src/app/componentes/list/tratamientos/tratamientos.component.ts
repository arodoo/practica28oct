import { Component, OnInit } from '@angular/core';
import { ControlService } from 'src/app/servicios/control/control.service';
import { TratamientoService } from 'src/app/servicios/tratamiento/tratamiento.service';

@Component({
  selector: 'app-tratamientos',
  templateUrl: './tratamientos.component.html',
  styleUrls: ['./tratamientos.component.css']
})
export class TratamientosComponent implements OnInit {

  titulo = 'Tratamientos';
  tratamientos: any;

  constructor(private tratamientoService: TratamientoService) { }

  ngOnInit(): void {
    this.tratamientoService.getAllTratamientos().subscribe(response=>{
      this.tratamientos = response;
    },
    error => {
      console.error(error);
    });
  }

  delete(tratamiento: any){
    this.tratamientoService.deleteTratamiento(tratamiento.id).subscribe(response=>{
      if (response.delete == true) {
        this.tratamientos.pop(tratamiento);
      }
    });
  }
}
