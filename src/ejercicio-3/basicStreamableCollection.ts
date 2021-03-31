import {Streamable} from "./streamable";
import {Print} from "./print";

/**
 * Clase abstracta generica
 */
export abstract class BasicStreamableColletion<T> implements Streamable<T>, Print {
    /**
     * Constructor
     * @param collecion Array donde esta toda la collection
     */
    constructor(protected collecion:T[]){}

    /**
     * Funcion que indica la cantidad de collecion que hay
     */
    getNumber():number{
        return this.collecion.length;
    }
    
    /**
     * Funcion que realiza la busqueda
     * @param tipo tipo que desea realizar la busqueda, por año o por nombre
     * @param nombre el contenido que quiere busqueda
     */
    abstract busqueda(tipo:string, nombre:string): T[];
    
    /**
     * Funcion para imprimir
     */
    abstract print():void;
}