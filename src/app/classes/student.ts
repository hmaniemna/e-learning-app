import { Group } from "../classes/group";

export class Student {
    idS!: number;
    firstName!: string;
    lastName!: string;
    emailId!: string;
    group!: Group["nameG"];
    level!:number;
    password!: string;
    accessCode!: number;
}
export const Level=[1,2,3];

