// src/app/pages/home/home.page.ts
import { Component, OnInit } from '@angular/core';
import { CardService, Card } from '../../card.service'; 


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  cards: Card[] = [];
  maxCards = 4;

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.cards = this.cardService.getCards();
  }
}
