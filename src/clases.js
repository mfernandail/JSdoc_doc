/**
 * Clase para crear un programador
 * @example
 * const nuevoProgramador = new Programador({nombreCompleto: 'Maria Fernanda'}, 'js');
 * programadorInstancia.getInfo();
 * 
 * @see https://docs.github.com/en/free-pro-team@latest/rest/reference/repos
 * 
 * @todo Implementar el resto de metodos
 */

class Programador {
    // 
    /**
     * @param {{nombreCompleto: string}} usuario Es la informacion del usuario
     * @param {Usuario} usuario Es la informacion del usuario
     * @param {string} lenguaje Es el lenguaje que maneja el programador
     */    
    constructor(usuario, lenguaje){
        this.nombreCompleto = usuario.nombreCompleto;
        this.lenguaje = lenguaje;
    }

    /**
     * Get info obtiene la informacion del programador
     * @returns {void}
     */
    getInfo(){
        console.log(`Hola soy ${ this.nombreCompleto } y programo en ${ this.lenguaje }`);
    }
}

/**
 * Conoce mas {@link Programador}
 */
const programadorInstancia = new Programador({nombreCompleto: 'Maria Fernanda'}, 'js');

programadorInstancia.getInfo();