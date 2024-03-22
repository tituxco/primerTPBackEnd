"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibroImpreso = void 0;
class LibroImpreso {
    constructor(titulo, autor, anioPublicacion, edicionesPublicadas) {
        this.titulo = titulo;
        this.autor = autor;
        this.anioPublicacion = anioPublicacion;
        this.edicionesPublicadas = edicionesPublicadas;
    }
    obtenerResumen() {
        return `${this.titulo} es un libro publicado por el escritor 
        ${this.autor.nacionalidad} ${this.autor.nombre} ${this.autor.apellido}  
        en el año ${this.anioPublicacion}, 
        desde su lanzamiento se han hecho ${this.edicionesPublicadas} ediciones`;
    }
}
exports.LibroImpreso = LibroImpreso;
