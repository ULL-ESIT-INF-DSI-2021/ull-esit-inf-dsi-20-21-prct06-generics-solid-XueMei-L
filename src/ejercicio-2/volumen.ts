import {isConvertible} from "./isConvertible";

/**
 * Funcion que calcula la unidad de volumen
 * Gm3 = gigametro cubico
 * Mm3 = megrametro cubico
 * km3 = kilometro cubico
 * hm3 = hectometro cubico
 * dec3= hecametro cubico
 * m3  = metro cubico
 * dm3 = decimetro cubico
 * cm3 = centimetro cubico
 * mm3 = milimetro cubico
 * um3 = micrometro cubico
 * nm3 = nanometro cubico
 */
enum unidadVolumen {Gm3 = Math.pow(10, 27), 
                    Mm3 = Math.pow(10, 18),
                    km3 = Math.pow(10, 9),
                    hm3 = Math.pow(10, 6),
                    dec3= Math.pow(10, 3),
                    m3  = Math.pow(10, 0),
                    dm3 = Math.pow(10, -3),
                    cm3 = Math.pow(10, -6),
                    mm3 = Math.pow(10, -9),
                    um3 = Math.pow(10, -18),
                    nm3 = Math.pow(10, -27),
}

export class Volumen implements isConvertible<unidadVolumen> {
    constructor(protected unidad1:number, protected unidMag:unidadVolumen) {
    }

    convertir(unidad2:unidadVolumen):number {
        let resultVolumen = this.unidad1 * this.unidMag / unidad2;
        return resultVolumen;
    }
}