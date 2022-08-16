import { Component, OnInit } from '@angular/core';
import { fade } from '../animations';
import { Card } from '../model/card';
import {CardService} from '../services/card.service'

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.scss'],
  animations: [
    fade]
})
export class BusinessCardComponent implements OnInit {
  public cards: Card[] = [];

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.cards = this.cardService.loadCard()
  }

}
