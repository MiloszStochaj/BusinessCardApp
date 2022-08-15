import { Component, OnInit } from '@angular/core';
import { fade } from '../animations';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.scss'],
  animations: [
    fade]
})
export class BusinessCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
