export class Usuario {
    constructor(public id: number,
                public nombre: string,
                public apellidos: string,
                public fechaNacimiento: string,
                public telefono: any,
                public email: string,
                public password: string,
                public localidad: string,
                public direccion: string,
                public imagenPerfil: string){}
}