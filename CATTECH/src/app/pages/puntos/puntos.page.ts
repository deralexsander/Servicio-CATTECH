import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Geolocation } = Plugins;

@Component({
  selector: 'app-puntos',
  templateUrl: './puntos.page.html',
  styleUrls: ['./puntos.page.scss'],
})
export class PuntosPage implements OnInit {
  center: google.maps.LatLngLiteral = { lat: -34.6037, lng: -58.3816 }; // Ubicación inicial (ejemplo: Buenos Aires)
  zoom = 12;
  markers = [
    { position: { lat: -34.6027, lng: -58.3811 }, title: 'Punto de Reciclaje 1' },
    { position: { lat: -34.6035, lng: -58.3845 }, title: 'Punto de Mantenimiento 1' },
    // Agrega más puntos según sea necesario
  ];
  //  defines la propiedad providers como un array de objetos
  providers = [
    { name: 'Reciladora1', distance: '0 km', address: 'viña' },
    { name: 'Punto de reparacion', distance: '0.2 km', address: 'viña' },
    { name: 'Recicladora3', distance: '0.4 km', address: 'viña' },
    
  ];

  async ngOnInit() {
    await this.requestLocationPermission();
  }

  async requestLocationPermission() {
    const hasPermission = await Geolocation['requestPermissions']();
    if (hasPermission.location === 'granted') {
      console.log("Permiso de ubicación otorgado");
    } else {
      console.log("Permiso de ubicación denegado");
    }
  }

  constructor() { }

  
}
