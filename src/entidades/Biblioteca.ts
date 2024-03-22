import { LibroImpreso } from "./Libro";

export class Biblioteca{
    private libros:LibroImpreso[]=[]
    
    agregarLibros(libro:LibroImpreso):LibroImpreso{
        this.libros.push(libro)
        console.log(`libro agregado correctamente: ${libro.titulo}`)
        return libro
    }

    mostrarCatalogo():LibroImpreso[]{
        console.log("Catalogo de la biblioteca")
        this.libros.forEach(
            (libro)=>{
                console.log(libro.obtenerResumen())
            }
        )
        return this.libros
    }
}