import { Component, OnInit } from '@angular/core';
import { ControlService } from 'src/app/servicios/control/control.service';

@Component({
  selector: 'app-controles',
  templateUrl: './controles.component.html',
  styleUrls: ['./controles.component.css']
})
export class ControlesComponent implements OnInit {

  citas: any;
  titulo = 'Controles';
  controles: any;

  constructor(private controlService: ControlService) { }

  ngOnInit(): void {
    this.controlService.getAllControles().subscribe(response => {
      this.controles = response;
    },
    error => {
      console.error(error)
    });
  }

  delete(control: any) {
    this.controlService.deleteControl(control.id).subscribe(response => {
      if(response.delete == true) {
        this.controles.pop(control);
      }
    });
  }

}
