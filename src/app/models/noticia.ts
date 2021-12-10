export class Noticia {
    constructor(public titular: string,
                public categoria: string,
                public prioridad: string,
                public fecha_publicacion: string,
                public descripcion: string,
                public imagen: string,
                public id_Protectora: number){}
}