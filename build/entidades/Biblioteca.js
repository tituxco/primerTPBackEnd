"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
class Biblioteca {
    constructor() {
        this.libros = [];
    }
    agregarLibros(libro) {
        this.libros.push(libro);
        console.log(`libro agregado correctamente: ${libro.titulo}`);
        return libro;
    }
    mostrarCatalogo() {
        console.log("Catalogo de la biblioteca");
        this.libros.forEach((libro) => {
            console.log(libro.obtenerResumen());
        });
        return this.libros;
    }
}
exports.Biblioteca = Biblioteca;
