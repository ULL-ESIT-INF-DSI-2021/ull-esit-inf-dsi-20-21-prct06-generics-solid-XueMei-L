import {isConvertible} from "./isConvertible";

/**
 * Funcion que hace intercambio entre las undidades de Velocidad
 * KmH = kilometro por hora
 * KmM = kilometro por minuto
 * KmS = kilometro por segundo
 */
enum unidadVelocidad {
    KmpH = 1, 
    KmpM = 60,
    kmpS = 3600,
}

export class Velocidad implements isConvertible<unidadVelocidad> {

    constructor(protected unidad1:number, protected unidMag:unidadVelocidad) {
    }
    convertir(unidad2:unidadVelocidad):number {
        let resultVelocidad = this.unidad1 * unidad2 / this.unidMag;
        return resultVelocidad;
    }
}