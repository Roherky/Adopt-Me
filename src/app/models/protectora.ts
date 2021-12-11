import { Animal } from "./animal";

export class Protectora {
    constructor(public id:number,
                public nombre: string,
                public direccion: string,
                public localidad: string,
                public email: string,
                public password: string,
                public telefono: string,
                public descripcion: string,
                // public animales: Animal[],
                public imagen: string,
                ){}
}
