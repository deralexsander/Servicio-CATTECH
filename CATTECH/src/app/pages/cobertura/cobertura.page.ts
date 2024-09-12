import { Component, OnInit } from '@angular/core';
import { CardService, Device } from '../../card.service'; 

@Component({
  selector: 'app-cobertura',
  templateUrl: './cobertura.page.html',
  styleUrls: ['./cobertura.page.scss'],
})
export class CoberturaPage implements OnInit {
  devices: Device[] = [];

  constructor(private cardService: CardService) {}

  ngOnInit() {
    this.devices = this.cardService.getDevices(); // Obtén la lista de dispositivos del servicio
  }
}