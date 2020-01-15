import { IPersonDto } from "./person-dto-type";

export interface IPerson {
  name: string;
  age: number;
  dob: Date;
  img: string;
  address: string;
  description: string;
  url: string;
}

export class Person implements IPerson {
  name: string;
  age: number;
  dob: Date;
  img: string;
  address: string;
  description: string;
  url: string;
  constructor(personDto: IPersonDto) {
    this.name = personDto.name;
    this.age = personDto.age;
    this.dob = new Date(personDto.dob);
    this.img = personDto.img;
    this.address = personDto.address;
    this.description = `${this.name} is ${this.age} years' old.`;
    this.url = `https://www.facebook.com/${personDto.fb}`;
  }
}
