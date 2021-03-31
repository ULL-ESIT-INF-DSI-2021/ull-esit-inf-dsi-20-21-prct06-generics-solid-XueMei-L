import {BasicStreamableColletion} from './basicStreamableCollection';

/**
 * Definir la estructura de documento
 */
export type documento = {
    nombre: string;
    tipo: string;
}

/**
 * Clase Documentales
 */
export class Documentales extends BasicStreamableColletion<documento> {
    constructor(elementos: documento[]){
        super(elementos);
    }
    /**
     * Realizar la busqueda
     * @param tipo tipo de busqueda que quiere realizr
     * @param value el contenido que quiere buscar
     */
    busqueda(tipo:string, value:string):any{
        if(tipo == "nombre"){
            return this.collecion.filter((n) => (n.nombre == value));
        }else if(tipo == "tipo"){
            return this.collecion.filter((n) => (n.tipo == value));
        }else{
            return "No existe la documentacion que desea a buscar";
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