import { Component, OnInit } from '@angular/core';
import { CitaService } from 'src/app/servicios/cita/cita.service';

/* interface Cita {
  fecha: string;
  lugar: string;
} */

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {
  titulo = 'Citas';
  citas: any;

/*   citas: Cita[] = [
    {
      fecha: '2021-10-10',
      lugar: 'Con el doc'
    },
    {
      fecha: '2021-10-10',
      lugar: 'Con el doc tmbn'
    }
  ]; */

  constructor(
    private citaService: CitaService
  ) {
  }

  ngOnInit(): void {
    this.citaService.getAllCitas().subscribe(response =>{
      this.citas = response;
    },
    error => {
      console.error(error)
    });
  }

  delete(cita: any){
    this.citaService.deleteCita(cita.id).subscribe(response =>{
      if(response.delete == true){
        this.citas.pop(cita);
      }
    })
  }

}
