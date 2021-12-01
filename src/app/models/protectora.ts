import { Animal } from "./animal";

export class Protectora {
    constructor(public nombre: string,
                public direccion: string,
                public localidad: string,
                public email: string,
                public password: string,
                public telefono: string,
                public animales: Animal[],
                public imagenes: []){}
}
