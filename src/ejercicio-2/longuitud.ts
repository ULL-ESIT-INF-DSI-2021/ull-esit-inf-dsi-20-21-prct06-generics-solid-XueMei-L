import {isConvertible} from "./isConvertible";

/**
 * Funcion que calcula la unidad de longuitud
 * m = metro
 * dm = decimetro
 * cm = centimetro
 * mm = milimetro
 */
enum unidadLonguitud { m  = Math.pow(10, 0),
                       dm = Math.pow(10, -1),
                       cm = Math.pow(10, -2),
                       mm = Math.pow(10, -3),
}
export class Longuitud implements isConvertible<unidadLonguitud> {
    constructor(protected unidad1:number, protected unidMag:unidadLonguitud) {

    }
    convertir(unidad2:unidadLonguitud):number {
        let resultLonguitud = this.unidad1 * this.unidMag / unidad2;
        return resultLonguitud;
    }
}