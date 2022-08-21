import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { fade, slide } from '../animations';
import { Card } from '../model/card';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss'],
  animations: [fade, slide],
})
export class CardFormComponent implements OnInit {
  constructor(private cardService: CardService) {}

  //Data
  public cards: Card[] = [];
  public name: string = '';
  public companyName: string = '';
  public emailName: string = '';
  public phoneNumber: string = '';

  public addCard() {
    const card: Card = {
      name: this.name,
      companyName: this.companyName,
      email: this.emailName,
      phoneNumber: this.phoneNumber,
      favorite: false,
      remove: false,
    };
    
    this.cards.push(card);

    this.cardService.saveCards(this.cards);
  }

 

  //Validators
  email = new FormControl('', [Validators.required, Validators.email]);
  phone = new FormControl('', [Validators.required, Validators.minLength(9)]);

  getErrorEmailMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorPhoneMessage() {
    if (this.phone.hasError('required')) {
      return 'You must enter a value';
    }

    return this.phone.hasError('phone') ? 'Not a valid phone number' : '';
  }

  ngOnInit(): void {
    this.cards = this.cardService.loadCard();
  }
}
