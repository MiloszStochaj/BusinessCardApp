import { animate, state, style, transition, trigger } from '@angular/animations';

export let fade = trigger('fade', [
    state('void', style({opacity:0})),
    transition('void <=> *', [
      
      animate(600)
    ]),

    

  ]);

  export let slide = trigger('slide', [
    state('void', style({bottom:0})),
    transition('void <=> *', [
      
      animate(400)
    ]),

    

  ]);