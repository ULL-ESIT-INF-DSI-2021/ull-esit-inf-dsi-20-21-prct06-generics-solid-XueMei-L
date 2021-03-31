import {isConvertible} from "./isConvertible";

/**
 * Funcion que calcula las unidades de Masa
 * g = gramo
 * decg = decagramo
 * hecg = hecagramo
 * kg = kilogramo
 */
enum unidadMasa { g = 1,
                  decg = Math.pow(10, 1),
                  hecg = Math.pow(10, 2),
                  kg = Math.pow(10, 3),
}

export class Masa implements isConvertible<unidadMasa> {
    constructor(protected unidad1:number, protected unidMag:unidadMasa) {

    }
    convertir(unidad2:unidadMasa):number {
        let resultMasa = this.unidad1 * this.unidMag / unidad2;
        return resultMasa;
    }
}