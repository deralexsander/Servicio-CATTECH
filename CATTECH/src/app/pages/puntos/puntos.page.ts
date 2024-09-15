import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puntos',
  templateUrl: './puntos.page.html',
  styleUrls: ['./puntos.page.scss'],
})
export class PuntosPage implements OnInit {
  
  //  defines la propiedad providers como un array de objetos
  providers = [
    { name: 'Reciladora1', distance: '0 km', address: 'viña' },
    { name: 'Punto de reparacion', distance: '0.2 km', address: 'viña' },
    { name: 'Recicladora3', distance: '0.4 km', address: 'viña' },
    
  ];

  constructor() { }

  ngOnInit() {
    //  obtener los proveedores desde una API
  }
}
