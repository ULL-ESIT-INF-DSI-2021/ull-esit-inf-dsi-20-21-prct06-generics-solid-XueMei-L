

# Práctica 6 - Clases e interfaces genéricas. Principios SOLID

```
Universidad: Universidad de La laguna
Asignatura: Desarrollo de Sistemas Informaticos
Curso: 2020 - 2021
Autor: XueMei Lin
```

## 1. Introducción

En esta práctica tendremos que solucionar una serie de problemas de programación que nos permitirán conocer más en profundidad sobre las clases e interfaces genéricas del lenguaje TypeScript, y también vamos a utilizar los principios SOLID de diseño orientado a objetos.

## 2. Objetivos

Como hemos mencionado antes, vamos a utilizar los principios de SOLID para profundizarnos el contenido sobre el lenguaje Typescript. Mediante los ejercicios, vamos a aprender más sobre:

1. Interfaces genéricas
2. Clases abstractas

## 3. Ejercicios realizados

Vamos a realizar 3 ejercicios sobre esta practica, cada ejercicio tiene su forma de diseño.

### 3.1. Ejercicio 1 - El combate definitivo

En este ejercicio , basado en el ejercicio anterior, simplemente crear clases sobre otros personajes como:

Marval

StartWars

Pokemon

Dragonball

### 3.2. Ejercicio 2 - Conversor de unidades

Respecto al ejercicio2, tenemos que realizar el intercambio entre distintas unidades de medición para distintas magnitudes, en nuestro caso, vamos a realizar las siguientes magnitudes:

**1. Velocidad**

**2. Masa**

**3. Longitud**

**4. Tiempo**

**5. Temperatura**

**6. Fuerza**

**7. Volumen**

Como objetivo, tendremos que crear una interfaz genérica llamada `isConvetible`, utilizando dicha interfaz vamos a realizar el intercambio de las unidades entre cada uno.

`Interfaz generica isConvertible`

```
/**
 * Interfaz generico que realiza el cambio entre dos unidades de medicion
 */
export interface isConvertible<T> {
    convertir(unidMag:T):number;
}
```



```

`Caso Velociad`
```


```

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
```



`Caso Masa`

```
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
```



`Caso Longitud`

````
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
````



`Caso Tiempo`

```
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
```



`Caso Temperatura`

```
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
```



`Caso Fuerza`

```
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
```



`Caso Volumen`

```
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
```

El resultado final de cada clase es lo siguiente:

![image-20210401001505292](C:\Users\linyouzi\AppData\Roaming\Typora\typora-user-images\image-20210401001505292.png)

### 3.3. Ejercicio 3 - DSIflix

En este ejercicio consiste en implementar una interfaz genérica llamado `Streamable` y una clase abstracta `BasicStreamableCollection` y otras clases abstractas que vamos a ver en lo siguiente:

`Clase abstracta sobre BasicStreamableCollection` :

1. Definir constructor
2. Devolver la longitud de la colección
3. Definir el método de búsqueda general
4. Definir el método de imprimir resultado

```
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
```



`Interfaz de imprimir` :

```
export interface Print{
    print():void;
}
```



`Interfaz de Stramable` :

```
export interface Streamable<T> {
    getNumber():number;
    busqueda(tipo: string, nombre:string): T[];
}
```



`Realizar la busqueda sobre documentales` :

```
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
```



`Realizar la busqueda sobre peliculas` :

```
import {BasicStreamableColletion} from './basicStreamableCollection';

/**

 * Definir la estructura de pelicula
   */
   export type pelicula = {
   nombre: string;
   tipo: string;
   year: number;
   }

/**

 * Clase Peliculas
   */
   export class Peliculas extends BasicStreamableColletion<pelicula> {
   constructor(elementos: pelicula[]){
       super(elementos);
   }
   /**
    * Realizar la busqueda
    * @param tipo tipo de busqueda que quiere realizr
    * @param value el contenido que quiere buscar
      */
      busqueda(tipo:string, value:string):any{
      //switch(tipo.toLocaleUpperCase()){
          if(tipo == "nombre"){
              return this.collecion.filter((n) => (n.nombre == value));
          }else if(tipo == "tipo"){
              return this.collecion.filter((n) => (n.tipo == value));
          }else if(tipo == "year"){
              return this.collecion.filter((n) => n.year = Number(value));
          }else{
              return "No existe la pelicula que desea a buscar";
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
```



`Realizar la busqueda sobre series` :

```
import {BasicStreamableColletion} from './basicStreamableCollection';

/**
 * Definir la estructura de Series
 */
export type series = {
    nombre: string;
    tipo: string;
    year: number;
    temporar: number;
    estrealla: number;
}

/**
 * Clase Series
 */
export class Series extends BasicStreamableColletion<series> {
    constructor(elementos: series[]){
        super(elementos);
    }
    /**
     * Realizar la busqueda
     * @param tipo tipo de busqueda que quiere realizr
     * @param value el contenido que quiere buscar
     */
    busqueda(tipo:string, value:string):any{
        if(tipo == "nombre") {
            return this.collecion.filter((n) => (n.nombre == value));
        }else if(tipo == "tipo") {
            return this.collecion.filter((n) => (n.tipo == value));
        }else if(tipo == "year") {
            return this.collecion.filter((n) => n.year = Number(value));
        }else if(tipo == "temporar") {
            return this.collecion.filter((n) => n.temporar == Number(value));
        }else if(tipo == "estrella") {
            return this.collecion.filter((n) => n.estrealla >= Number(value));
        }else {
            return "No existe la serie que desea a buscar";
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
```

Como conclusión, vamos a ver la siguiente imagen:

![image-20210331235930240](C:\Users\linyouzi\AppData\Roaming\Typora\typora-user-images\image-20210331235930240.png)



##  4. Conclusiones

En esta práctica, he aprendido más cosas que están relacionado con

## 5. Bibliografía

1. [Clases abstractas y interfaces](https://ifgeekthen.everis.com/es/clases-abstractas-e-interfaces)

2. [Relaciones de clases abstractas](https://qastack.mx/programming/597769/how-do-i-create-an-abstract-base-class-in-javascript)

3. [Clases y metodos](https://lenguajejs.com/javascript/caracteristicas/clases-es6/)

4. Apuntes de la clases
