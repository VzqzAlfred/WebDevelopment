export class FileVanilla{
    constructor(name){
        this.name = name;
    }

    greet(){
        return `¡Webpack con ${this.name}!`;
    }
}