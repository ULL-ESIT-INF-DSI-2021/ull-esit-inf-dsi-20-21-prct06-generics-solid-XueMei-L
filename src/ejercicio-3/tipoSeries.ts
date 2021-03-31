import {BasicStreamableColletion} from './basicStreamableCollection';

/**
 * Definir la estructura de Series
 */
export type series = {
    nombre: string;
    tipo: string;
    year: number;
    temporar: number;
    estrealla: number;
}

/**
 * Clase Series
 */
export class Series extends BasicStreamableColletion<series> {
    constructor(elementos: series[]){
        super(elementos);
    }
    /**
     * Realizar la busqueda
     * @param tipo tipo de busqueda que quiere realizr
     * @param value el contenido que quiere buscar
     */
    busqueda(tipo:string, value:string):any{
        if(tipo == "nombre") {
            return this.collecion.filter((n) => (n.nombre == value));
        }else if(tipo == "tipo") {
            return this.collecion.filter((n) => (n.tipo == value));
        }else if(tipo == "year") {
            return this.collecion.filter((n) => n.year = Number(value));
        }else if(tipo == "temporar") {
            return this.collecion.filter((n) => n.temporar == Number(value));
        }else if(tipo == "estrella") {
            return this.collecion.filter((n) => n.estrealla >= Number(value));
        }else {
            return "No existe la serie que desea a buscar";
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