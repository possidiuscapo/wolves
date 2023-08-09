import { Injectable } from '@angular/core';
import { Categorie, Themes } from './categorie';
import { THEMES } from './mock.categorie';

@Injectable({
    providedIn: 'root'
})
export class ServiceService {
themes: Themes[] = THEMES
selectedTheme!: Themes;
  constructor() { }
  getCatTheme(id: string) {
    this.selectedTheme = this.themes.filter(el => el.id === id)[0]
    return this.selectedTheme;
  }

}

