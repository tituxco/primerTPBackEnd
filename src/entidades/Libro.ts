import { Autor } from "./Persona";

interface Libro{
    titulo:string
    autor:Autor
    anioPublicacion:number
    edicionesPublicadas:number
    obtenerResumen():string
}

export class LibroImpreso implements Libro{
    titulo: string;
    autor: Autor;
    anioPublicacion: number;
    edicionesPublicadas: number;
    constructor(titulo:string,autor:Autor,anioPublicacion:number,edicionesPublicadas:number){
        this.titulo=titulo
        this.autor=autor
        this.anioPublicacion=anioPublicacion
        this.edicionesPublicadas=edicionesPublicadas
    }

    obtenerResumen(): string {
        return `${this.titulo} es un libro publicado por el escritor 
        ${this.autor.nacionalidad} ${this.autor.nombre} ${this.autor.apellido}  
        en el año ${this.anioPublicacion}, 
        desde su lanzamiento se han hecho ${this.edicionesPublicadas} ediciones`
    }


}