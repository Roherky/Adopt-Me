export class Noticia {
    constructor(public titulo: string,
                public categoria: string,
                public prioridad: string,
                public fecha_publicacion: string,
                public descripcion: string,
                public imagen: string,
                public id_Protectora: number){}
}