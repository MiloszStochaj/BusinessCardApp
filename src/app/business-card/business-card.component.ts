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

  }

  public moveToBin(card: Card) {
    if (card.remove === false) {
      card.remove = true;
    } else if (card.remove === true) {
      card.remove = false;
    }
    this.cardService.saveCards(this.cards);
 
  }

  public deleteCard(card: Card){
    const index = this.cards.indexOf(card);
    this.cards.splice(index,1);

    this.cardService.saveCards(this.cards);
  }

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cards = this.cardService.loadCard();
  }
}
