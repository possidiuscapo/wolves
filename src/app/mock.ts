// mock.ts

import { Category, Theme, Carousel, Image } from './models';

export const categories: Category[] = [
      { id: 1, name: 'Catégorie 1' },
      { id: 2, name: 'Catégorie 2' },
      // Ajoutez les autres catégories ici
];

export const themes: Theme[] = [
      { id: 1, name: 'Thème 1', categoryId: 1 },
      { id: 2, name: 'Thème 2', categoryId: 1 },
      // Ajoutez les autres thèmes ici
];

export const CAROUSELS: Carousel[] = [
      {
            id: 1,
            name: 'Carousel 1',
            images: [
                  { id: 1, imageUrl: '../assets/img-carousel/Template1.png' },
                  { id: 2, imageUrl: '../assets/img-carousel/Template4.png' },
                  { id: 3, imageUrl: '../assets/img-carousel/Template7.png' },
            ],
      },
      {
            id: 2,
            name: 'Carousel 2',
            images: [
                  { id: 1, imageUrl: '../assets/img-carousel/Template2.png' },
                  { id: 2, imageUrl: '../assets/img-carousel/Template5.png' },
                  { id: 3, imageUrl: '../assets/img-carousel/Template8.png' },
            ],
      },
      {
            id: 3,
            name: 'Carousel 3',
            images: [
                  { id: 2, imageUrl: '../assets/img-carousel/Template3.png' },
                  { id: 3, imageUrl: '../assets/img-carousel/Template6.png' },
                  { id: 1, imageUrl: '../assets/img-carousel/Template9.png' },
            ],
      },
];