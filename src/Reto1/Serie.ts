// Crearemos una clase llamada Serie con las siguientes características:

// - Sus atributos son titulo , numero de temporadas , entregado, genero y creador.
// - Por defecto, el numero de temporadas es de 3 temporadas y entregado false . El resto de atributos serán
// valores por defecto según el tipo del atributo.

// Los constructores que se implementaran serán:

// - Un constructor con el titulo y creador. El resto por defecto.

// Los métodos que se implementara serán:

// - Métodos get de todos los atributos, excepto de entregado.
// - Métodos set de todos los atributos, excepto de entregado.
// - Sobrescribe los métodos toString

const defectoTemporadas = 3;
const defectoEntregado = false;
const defectoGenero = "Drama";

class Serie{

    titulo: String;
    numero_temporadas: Number;
    entregado: Boolean;
    genero: String;
    creador: String;

    constructor (newTitulo: String, newCreador: String) {

        this.titulo = newTitulo;
        this.numero_temporadas = defectoTemporadas;
        this.entregado = defectoEntregado;
        this.genero = defectoGenero;
        this.creador = newCreador;
    }

    setTitulo (newTitulo: String) : void {

        this.titulo = newTitulo;
    }

    setNumeroTemporadas (newTemporadas: Number) : void {

        this.numero_temporadas = newTemporadas;
    }
    
    setGenero (newGenero: String) : void {

        this.genero = newGenero;
    }

    setCreador (newCreador: String) : void {

        this.creador = newCreador;
    }

    getTitulo () : String {

        return this.titulo;
    }

    getNumeroTemporadas () : Number {

        return this.numero_temporadas;
    }
    
    getGenero () : String {

        return this.genero;
    }

    getCreador () : String {

        return this.creador;
    }

    toString () : void {

        console.log("La serie "+this.titulo+" con "+this.numero_temporadas+" temporadas, del género "+this.genero+" y del creador "+this.creador+" está entregada: "+this.entregado);
    }
}