import {isConvertible} from "./isConvertible";

/**
 * Funcion que calcula la unidad de Fuerza entre newton y dinas
 * newton
 * dinas
 */
enum unidadFuerza { newton = 1, 
                    dinas = Math.pow(10,4)
}

export class Fuerza implements isConvertible<unidadFuerza> {
    constructor(protected unidad1:number, protected unidMag:unidadFuerza) {
    }

    convertir(unidad2:unidadFuerza):number {
        let resultFuerza = this.unidad1 * unidad2 / this.unidMag; 
        return resultFuerza;
    }
}