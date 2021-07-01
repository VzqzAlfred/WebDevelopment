export class FileTS{
    nombre:string;
    constructor(nombre:string){
        this.nombre = nombre;
    }

    greet():string{
        return `¡Webpack con ${this.nombre}!`;
    }
}