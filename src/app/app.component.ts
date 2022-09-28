import { Component } from '@angular/core';
import { Utilisateur, Utilisateur2 } from './classes/utilisateur';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'trainingApp';

  // Types
  name!: string;
  lastName = 'Jean';
  firstName = "OUATTARA";
  description = `
  La formation sur Angular 14
  se passe très bien !
  La formation sur Angular 14
  se passe très bien !
  La formation sur Angular 14
  se passe très bien !
  La formation sur Angular 14
  se passe très bien !
  La formation sur Angular 14
  se passe très bien !
  `;
  name2 = 'SANA' + " Issa" + this.description;

  // Boolean
  isEnable!: boolean;
  isConnected = true;

  // Number
  visiteur!: number;
  participant = 12;

  // Arrays
  names!: string[];
  formations: string[] = [];
  forms = [];

  // Any
  nimportequoi: any;
  undefinedVariable: string | undefined;

  // Classes
  user!: Utilisateur;


  getName(): string {
    this.name = this.lastName + this.firstName;
    return this.name;
    this.addParticipant(2);
  }

  addParticipant(n: number): number {
    return this.participant + n;
  }

  getUser(): Utilisateur {
    this.user = new Utilisateur();
    this.user.nom = this.lastName;
    this.user.prenom = this.firstName;
    return this.user;
  }
}
