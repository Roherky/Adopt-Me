export class Usuario {
    constructor(public nombre: string,
                public apellido1: string,
                public apellido2: string,
                public fechaNacimiento: string,
                public genero: string,
                public telefono: number,
                public email: string,
                public password: string,
                public localidad: string,
                public direccion: string,
                public imagenPerfil: string){}
}