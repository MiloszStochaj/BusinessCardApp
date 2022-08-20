import { Component, OnInit } from '@angular/core';
import { fade } from '../animations';
// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    fade]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const target = document.querySelector('.tw');
    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 100,
      deleteSpeed: 80,
      typeColor: 'purple'
    })
    
    writer
      .type('You can create new one.')
      .rest(500)
      .changeOps({ deleteSpeed: 80 })
      .remove(15)
      .type('store.')
      .rest(500)
      .remove(6)
      .type('add to favorites.')
      .rest(500)
      .changeOps({ deleteSpeed: 20 })
      .remove(17)
      .type('remove.')
      .rest(500)
      .clear()
      .start()
  }

}
