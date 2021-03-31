import {isConvertible} from "./isConvertible";

/**
 * Funcion que calcula la unidad de Temperaturas
 * C = Celsuis
 * F = Fahrenheit
 * K = Kelvin
 * Ra = Rankine
 * Re = Reaumur
 */
enum unidadTemperatura { 
                    C = 1,
                    F = 32,
                    K = 273.15,
                    Ra = 491.67,
                    Re = 1
}

export class Temperatura implements isConvertible <unidadTemperatura> {
    constructor(protected unidad1: number, protected unidMag: unidadTemperatura) {}

    convertir(unidad2:unidadTemperatura): number {
        let resultTemperatura = this.unidad1 * this.unidMag / unidad2;
        return resultTemperatura;
    }
}