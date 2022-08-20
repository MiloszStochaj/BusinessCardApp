import { Component, OnInit } from '@angular/core';
import { fade } from '../animations';
import { Card } from '../model/card';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.scss'],
  animations: [fade],
})
export class BusinessCardComponent implements OnInit {
  public cards: Card[] = [];

  public setfavorite(card: Card) {
    if (card.favorite === false) {
      card.favorite = true;
    } else if (card.favorite === true) {
      card.favorite = false;
    }
    this.cardService.saveCards(this.cards);
    console.log(card);
  }

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cards = this.cardService.loadCard();
  }
}
