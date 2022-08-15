import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

}
