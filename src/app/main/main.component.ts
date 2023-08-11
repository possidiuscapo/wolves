import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Users } from '../models';
import { fadeInAnimation } from '../animation.module';
import { userInfos } from '../user.Info';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [fadeInAnimation]
})
export class MainComponent implements OnInit{
  @Input() getStarted!: boolean;
  @Input() darkmode!: boolean;
  user!: userInfos;
  usersChoice!: {category: string, siteName: string, theme: string, colors: {primary?: string, secondary?: string, tertiary?: string}} ;
  template: boolean = false;
  formulaire: boolean = false;
  // darkShare!: boolean;
  Users!: Users;
  constructor(private service : ServiceService){}
  ngOnInit(): void {
    window.scroll(10000, 0)
  }
 
  showTemp($event: any){
    this.template = $event;
  }
  showform($event: any){
    this.formulaire = true;
  }
  getObjectChoice($event:any){
    this.usersChoice = $event;
    console.log($event);
    
  }
  showUserInfos($event: userInfos){
    console.log(this.user);    
  }
  createUsers($event: any){
    this.user = $event
    this.Users = new Users(this.user.firstName, this.user.lastName, this.user.mail, this.usersChoice.category, this.usersChoice.theme, this.usersChoice.siteName, this.usersChoice.colors);
    console.log(this.Users);
     
}
}
