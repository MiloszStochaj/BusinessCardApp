import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { fade, slide } from '../animations';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss'],
  animations: [
    fade,
    slide
]
})
export class CardFormComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
