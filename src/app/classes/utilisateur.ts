import { User } from "../interfaces/user";

export class Utilisateur implements User {
    nom!: string;
    prenom!: string;

}

export class Utilisateur2 {
    constructor(
        lastName?: string,
        fisrtName?: string,
    ) {}
}