export class Usuario {
    constructor(public nombre: string,
                public apellidos: string,
                public fechaNacimiento: string,
                public telefono: number,
                public email: string,
                public password: string,
                public localidad: string,
                public direccion: string,
                public imagenPerfil: string){}
}