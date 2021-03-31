import {isConvertible} from "./isConvertible";

/**
 * Funcion que hace intercambio entre tiempo, hora, minutos, y segundos
 * h = hora
 * min = minutos
 * seg = segundos
 */
enum unidadTiempo { h = 1, 
                    min = 60, 
                    seg = 3600
}

export class Tiempo implements isConvertible <unidadTiempo> {
    constructor(protected unidad1: number, protected unidMag: unidadTiempo) {}

    convertir(unidad2:unidadTiempo): number {
        let resultTimepo = this.unidad1 * unidad2 / this.unidMag;
        return resultTimepo;
    }
}