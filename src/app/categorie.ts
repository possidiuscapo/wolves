export class Categorie {
    constructor(
        public id: string,
        public name: string,
        public state: boolean,
        public choose: boolean,
    ) { }
}

export class Slide {
    constructor(
        public headline: string,
        public src: string
    ) { }
}
export class Themes {
    constructor(
        public id: string,
        public themes: Array<SousThemes>,
        ){ }
}
export class SousThemes{
    constructor(
    public state:boolean,
    public name: string){}
}