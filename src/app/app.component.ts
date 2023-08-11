import { Component } from "@angular/core";

@Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css']
})
export class AppComponent {
      sendedStart!: boolean;
      title = 'projet_wolves';
      darkParent: boolean = false;
      sendToChild($event: boolean){
            this.sendedStart = $event;
            console.log(this.sendedStart);
            
      }
      sendDarkMode($event: boolean){
            this.darkParent = $event;
      }
}
