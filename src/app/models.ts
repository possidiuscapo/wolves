// models.ts

export interface Category {
      id: number;
      name: string;
}

export interface Theme {
      id: number;
      name: string;
      categoryId: number;
}

export interface Image {
      id: number;
      imageUrl: string;
}

export interface Carousel {
      id: number;
      name: string;
      images: Image[];
}
export class Users{
      constructor(
            private firstName: string,
            private lastName: string,
            private email : string,
            private category: string, 
            private theme: string,
            private siteName: string,
            private colors:{primary?: string, secondary?: string, tertiary?: string},){};
}