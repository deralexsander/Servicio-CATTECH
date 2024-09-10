import { Component, OnInit } from '@angular/core';
import { CardService, Card } from '../../card.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {

  cards: Card[] = [];

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.cards = this.cardService.getCards();
  }
}