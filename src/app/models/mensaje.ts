export class Mensaje {
    constructor(public id_mensaje: number,
                public id_chat: number,
                public mensaje: string,
                public id_emisor: number,
                public id_receptor: number){}
}
