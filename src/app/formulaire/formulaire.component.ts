import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fadeInAnimation } from '../animation.module'
import { userInfos } from '../user.Info';
@Component({
      selector: 'app-formulaire',
      templateUrl: './formulaire.component.html',
      styleUrls: ['./formulaire.component.css'],
      animations: [fadeInAnimation]
})
export class FormulaireComponent implements OnInit {
      
      @Output() userInfo: EventEmitter<userInfos> = new EventEmitter();


//      userModel = new userInfos('King', 'TCHALLA','king@wakanda');      
     prenom = "";
     nom = "";
     email = "";
     newUserInfo!: userInfos;
     localInfo: string | null = null;
     submitted = false;


      FirstName!:string | null;
      LastName!: string | null;
      Email!: string | null;

      ngOnInit():void {
            if(localStorage){
                  console.log(`Les information de l'utilisateur sont:
                  Nom: ${this.LastName}
                  Prenom: ${this.FirstName}
                  Email: ${this.Email}`);
            }
      }

      onSubmit(){
            this.submitted = true;                        
      }

      newUser(){
            this.newUserInfo = new userInfos(this.prenom, this.nom, this.email);
            this.userInfo.emit(this.newUserInfo);
      }

      getUserInfo(): string | null {
            return localStorage.getItem(JSON.stringify(this.newUserInfo)) 
      }

      loadUserInfo(): string |null {
            return this.localInfo = this.getUserInfo()
      }

      ngOnChanges():void{
            if(localStorage === null || localStorage === undefined){
                  console.log("Donnée vide");                  
            } else {
                  console.log(`Les information de l'utilisateur sont:
            Nom: ${this.LastName}
            Prenom: ${this.FirstName}
            Email: ${this.Email}`);
            }
            
      }

     



}

