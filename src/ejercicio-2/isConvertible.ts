/**
 * Interfaz generico que realiza el cambio entre dos unidades de medicion
 */
export interface isConvertible<T> {
    convertir(unidMag:T):number;
}