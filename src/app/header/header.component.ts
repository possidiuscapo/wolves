import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { fadeInAnimation } from '../animation.module';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [fadeInAnimation]
})
export class HeaderComponent implements OnInit {
  start: boolean = true;
  darkmode: boolean = false;
  @Output() starte: EventEmitter<boolean> = new EventEmitter();
  @Output() dark: EventEmitter<boolean> = new EventEmitter();
  newSentences: string = "";
  constructor(private service : ServiceService){}
  writter(sentences: string){
    let tab  = sentences.split("");
    let newTab:string[] = [];
    let i = 0;
    setInterval(() => {
      if (i < tab.length){
        newTab.push(tab[i]);
        this.newSentences = newTab.join("");
        i++;
      }
    }, 70);
  }
  darker(){
    this.darkmode = !this.darkmode;
    this.dark.emit(this.darkmode);
  }
  started(start: boolean){
    this.starte.emit(start);
  }
  ngOnInit(): void {
    this.writter("Découvrez cette plateforme novatrice! Le site vitrine intègre un Chatbot puissant, vous permettant de générer des sites Web attrayants en quelques clics seulement. Simplifiez votre présence en ligne et donnez vie à vos idées grâce à cette solution intuitive et efficace pour créer des sites uniques.")
  }
}
