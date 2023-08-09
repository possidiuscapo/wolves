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