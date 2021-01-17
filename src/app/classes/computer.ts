import { Identifiers } from '@angular/compiler/src/render3/r3_identifiers';

export class Computer {

    id: number;
    name: string;
    description: string;
    ram: number;
    harddrive: string;
    company: string;
    image: string;
    os: string;
    price: number;

    constructor(_id: number = 0, _name: string = "", _image: string = "") {
        this.id = _id;
        this.name = _name;
        this.image = _image;
    }
}
