import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
// import { fadeInAnimation } from '../animation.module';
import { Categorie, SousThemes, Themes } from '../categorie';
import { CATEGORIES, THEMES } from '../mock.categorie';
import { ServiceService } from '../service.service';
import { FormsModule } from '@angular/forms';
import { CAROUSELS } from '../mock';
import { Carousel } from '../models';
import { count } from 'rxjs';
import { DatePipe } from '@angular/common';
// if (choice) {
//       choice.scrollTo(10000,0);

//       // input.scrollBy({top: 10000000})
//       // input.scrollIntoView();
// }

@Component({
    selector: 'app-choice',
    templateUrl: './choice.component.html',
    styleUrls: ['./choice.component.css'],
    // animations: [fadeInAnimation]
})
export class ChoiceComponent implements OnInit {
    @Input() darkmode: boolean = true;
    constructor(
        private service: ServiceService,
        private renderer: Renderer2
    ) { };
    @ViewChild('choice') choice !: ElementRef;
    // ngAfterViewInit(): void {
    //     this.scrollToBottom();
    // }
    scrollToBottom() {
        const container = this.choice.nativeElement;
        // window.scroll(0, container.scrollHeight)
        container.scrollTop= container.scrollHeight
        console.log(container.scrollTop);
        console.log(container.scrollHeight);
    }
    @Output() form: EventEmitter<boolean> = new EventEmitter();
    @Output() templ: EventEmitter<boolean> = new EventEmitter();
    @Output() choiceData: EventEmitter <{category: string, siteName: string, theme: string, colors:{primary?: string, secondary?: string, tertiary?: string}}> = new EventEmitter();
    index: number = 0;
    colored: boolean = false;
    seeColor: boolean = false;
    temp: boolean = true;
    bonj: boolean = false;
    color: boolean = false;
    cate: boolean = false;
    cate2: boolean = false;
    seeTheme: boolean = false;
    seeTitle: boolean = false;
    template: boolean = false;
    fiText: boolean = false;
    confirm: number = 0;
    selectedCategorie!: Categorie;
    categorieThemes!: Themes;
    categories: Categorie[] = CATEGORIES
    themes: Themes[] = THEMES;
    selectedTheme: string[] = [];
    inputValue: string = "";
    time: any = "";
    minute: any = "";
    able: boolean = true;
    paddleOfColor: {primary?: string, secondary?: string, tertiary?: string} = {}
        objectChoice !: {
        category: string, 
        siteName: string, 
        theme: string, 
        colors: {primary?: string, secondary?: string, tertiary?: string}};

    heure: any = this.time + this.minute

    onSelect(categorie: Categorie) {
        this.selectedCategorie = categorie;
        // this.categories.forEach(el => {
        //       el.state = false;
        // })
        this.selectedCategorie.state = true;
        this.selectedCategorie.choose = true;
        this.categorieThemes = this.service.getCatTheme(this.selectedCategorie.id);
        this.retard(this.categorieThemes.themes);
        setTimeout(() => {
            this.seeTheme = true;
            // this.retard(this.categories)
        }, 1000);
        this.able = false;
        this.scrollToBottom();
    }
    retard(array: SousThemes[] | Categorie[]) {
        let i = 0
        setInterval(() => {
            if (i < array.length) {
                array[i].state = true;
                i++;
            }
        }, 100);
    }
    ngOnInit(): void {
        setTimeout(() => {
            this.bonj = true;
        }, 1000);
        setTimeout(() => {
            this.cate = true;
        }, 2000);
        setTimeout(() => {
            this.cate2 = true;
            this.retard(this.categories)
        }, 3000);
    }
    startForm(bool: boolean,) {
        this.objectChoice = {
            category : this.selectedCategorie.name,
            siteName: this.selectedTheme[1],
            theme: this.selectedTheme[0],
            colors: this.paddleOfColor
        }
        this.templ.emit(bool);

    }
    @ViewChild('input1') primary!: ElementRef;
    @ViewChild('input2') secondary!: ElementRef;
    @ViewChild('input3') tertiary!: ElementRef;
    colorPaddle() {
        this.paddleOfColor = {};
        let input1 = this.primary.nativeElement;
        let input2 = this.secondary.nativeElement;
        let input3 = this.tertiary.nativeElement;
        this.paddleOfColor.primary = (input1.value)
        this.paddleOfColor.secondary = (input2.value)
        this.paddleOfColor.tertiary = (input3.value)
        console.log(this.paddleOfColor);
        return this.paddleOfColor;

    }
    themer() {
        this.selectedTheme[this.confirm] = this.inputValue;
        this.confirm++;
        if (this.fiText) {
            this.template = true;
        }
        if (this.selectedTheme[0] && this.selectedTheme[1]) {
            setTimeout(() => {
                this.fiText = true;
                this.scrollToBottom();
            }, 1000);
        }
        if (this.template) {
            setTimeout(() => {
                this.seeColor = true;
                this.scrollToBottom();
            }, 5000);
        }
        if (this.template) {
            setTimeout(() => {
                this.colored = true
                this.scrollToBottom();
            }, 6000);
        }
        this.inputValue = "";
        setTimeout(() => {
            this.seeTitle = true;
            this.scrollToBottom();
        }, 1000);
        this.scrollToBottom();

    }
    botText: string = "Bonjour chers clients"

    times() {
        let time = new Date()
        let hours = 0;
        return hours = time.getHours();
    }

    minutes() {
        let minute = new Date();
        let seconds = 0;
        seconds = minute.getSeconds();
        this.time = seconds;
        return seconds = minute.getSeconds();
    }
    hideColor() {
        this.color = false;
    }
    showColor() {
        this.color = true;


    }
    modifierTheme(u: number) {
        this.inputValue = this.selectedTheme[u];
        this.confirm = u;
        this.fiText = false;
    }
    choices() {
        this.choiceData.emit(this.objectChoice)
        console.log(this.objectChoice);
        
    }
}
