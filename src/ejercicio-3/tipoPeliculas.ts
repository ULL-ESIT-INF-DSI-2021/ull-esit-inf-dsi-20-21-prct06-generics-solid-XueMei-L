import {BasicStreamableColletion} from './basicStreamableCollection';

/**
 * Definir la estructura de pelicula
 */
export type pelicula = {
    nombre: string;
    tipo: string;
    year: number;
}

/**
 * Clase Peliculas
 */
export class Peliculas extends BasicStreamableColletion<pelicula> {
    constructor(elementos: pelicula[]){
        super(elementos);
    }
    /**
     * Realizar la busqueda
     * @param tipo tipo de busqueda que quiere realizr
     * @param value el contenido que quiere buscar
     */
    busqueda(tipo:string, value:string):any{
        //switch(tipo.toLocaleUpperCase()){
            if(tipo == "nombre"){
                return this.collecion.filter((n) => (n.nombre == value));
            }else if(tipo == "tipo"){
                return this.collecion.filter((n) => (n.tipo == value));
            }else if(tipo == "year"){
                return this.collecion.filter((n) => n.year = Number(value));
            }else{
                return "No existe la pelicula que desea a buscar";
            }
    }
    /**
     * Funcion de imprimir el resultado
     */
    print(){
        this.collecion.forEach((tipo, value) => {
            console.log(`tipo que desea buscar: ${tipo}
                         nombre concreto que desea a buscar ${value}`);
        })
    }
}