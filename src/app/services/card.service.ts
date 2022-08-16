import { Injectable } from '@angular/core';
import { Card } from '../model/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor() { }
  storageKey = 'savedCards'

  public saveCards(cards: Card[]): void {
    const savedCards: string = JSON.stringify(cards)

    localStorage.setItem(this.storageKey, savedCards)
  }

  public loadCard(): Card[] {
    const savedCards = localStorage.getItem(this.storageKey);
    if (savedCards === null){
      return []
    }
    const cardsObjects: Card[] = JSON.parse(savedCards);
    return cardsObjects

  }

  
}
