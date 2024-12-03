import { Component, OnInit } from '@angular/core';
import { VisitasService } from 'src/app/services/visitas.service';

@Component({
  selector: 'app-agendaadmin',
  templateUrl: './agendaadmin.page.html',
  styleUrls: ['./agendaadmin.page.scss'],
})
export class AgendaadminPage implements OnInit {
  visitas: any[] = [];
  contadorMaximo: number = 0;

  constructor(private visitasService: VisitasService) {}

  ngOnInit() {
    this.visitasService.getVisitas().subscribe(
      visitas => {
        console.log('Todas las visitas recibidas:', visitas);
        this.visitas = visitas;

        if (this.visitas.length > 0) {
          this.visitas.sort((a, b) => b.contador - a.contador);
          this.contadorMaximo = this.visitas[0].contador;
        }
      },
      error => {
        console.error('Error al obtener todas las visitas:', error);
      }
    );
  }
}
