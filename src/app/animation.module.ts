import { trigger, style, animate, transition, query, stagger } from '@angular/animations';

export const fadeInAnimation = trigger('fadeInAnimation', [
      transition(':enter', [
            style({ opacity: 0 }),
            animate('3s ease', style({ opacity: 1 })),
      ])
])