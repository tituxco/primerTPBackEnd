import { Biblioteca } from "./entidades/Biblioteca"
import { Autor } from "./entidades/Persona"
import { LibroImpreso } from "./entidades/Libro"


const gabriel=new Autor("Gabriel","Garcia Marquez","Colombiano")
const tolkien=new Autor("Jhon Ronald Reuel","Tolkien","Ingles")
const anto=new Autor("Antoine","de Saint-Exupery","Frances")
const mark=new Autor("Mark","Twain","Estadounidense")

const cien=new LibroImpreso("Cien años de soledad",gabriel,1967,379)
const lotr=new LibroImpreso("El Señor de los anillos",tolkien,1954,10)
const prince=new LibroImpreso("El principito",anto,1943,1300)
const tom=new LibroImpreso("Las aventuras de Tom Sawyer",mark,1876,2500)

const biblioteca=new Biblioteca()
biblioteca.agregarLibros(cien)
biblioteca.agregarLibros(lotr)
biblioteca.agregarLibros(prince)
biblioteca.agregarLibros(tom)

biblioteca.mostrarCatalogo()
