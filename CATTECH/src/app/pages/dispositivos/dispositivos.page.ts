import { Component, OnInit } from '@angular/core';
import { CardService, CardWithDevices } from '../../card.service';


@Component({
  selector: 'app-dispositivos',
  templateUrl: './dispositivos.page.html',
  styleUrls: ['./dispositivos.page.scss'],
})
export class DispositivosPage implements OnInit {

  cardsWithDevices: CardWithDevices[] = [];

  constructor(private cardService: CardService) {}

  ngOnInit() {
    this.cardsWithDevices = this.cardService.getCardsWithDevices();
  }
}