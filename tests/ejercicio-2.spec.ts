import 'mocha';
import {expect} from 'chai';
import {Velocidad} from '../src/ejercicio-2/velocidad';
import {Masa} from '../src/ejercicio-2/masa';
import {Longuitud} from '../src/ejercicio-2/longuitud';
import {Tiempo} from '../src/ejercicio-2/tiempo';
import {Temperatura} from '../src/ejercicio-2/temperatura';
import {Fuerza} from '../src/ejercicio-2/fuerza';
import {Volumen} from '../src/ejercicio-2/volumen';

//Velocidad
enum unidadVelocidad { 
    KmpH = 1, 
    KmpM = 60,
    kmpS = 3600,
}

//Masa
enum unidadMasa { 
    g = 1,
    decg = Math.pow(10, 1),
    hecg = Math.pow(10, 2),
    kg = Math.pow(10, 3),
}

//Longuitud
enum unidadLonguitud { 
    m  = Math.pow(10, 0),
    dm = Math.pow(10, -1),
    cm = Math.pow(10, -2),
    mm = Math.pow(10, -3),
}

//Tiempo
enum unidadTiempo { 
    h = 1, 
    min = 60, 
    seg = 3600
}

//Temperatura
enum unidadTemperatura { 
    C = 1,
    F = 32,
    K = 273.15,
    Ra = 491.67,
    Re = 1
}

//Fuerza
enum unidadFuerza { newton = 1, 
    dinas = Math.pow(10,4)
}

//Volumen
enum unidadVolumen {
    Gm3 = Math.pow(10, 27), 
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


describe(`Pracitca6_ejercicio2_prueba`, () => {
    const velocidad = new Velocidad(10, unidadVelocidad.KmpH);
    const masa = new Masa(7, unidadMasa.kg);
    const longuitud = new Longuitud(7, unidadLonguitud.dm);
    const tiempo = new Tiempo (7, unidadTiempo.h);
    const temperatura = new Temperatura(30, unidadTemperatura.C);
    const fuerza = new Fuerza(1, unidadFuerza.newton);
    const volumen = new Volumen(10, unidadVolumen.km3);

    describe('Velocidad', () => {
        it('10 kilometro por hora = 600 kilometro por minutos', () => {
            expect(velocidad.convertir(unidadVelocidad.KmpM)).to.be.equal(600);
        });
    });

    describe('Masa', () => {
        it('7 kg = 7000 g', () => {
            expect(masa.convertir(unidadMasa.g)).to.be.equal(7000);
        });
    });

    describe('Longuitud', () => {
        it('7 dm = 70 cm', () => {
            expect(longuitud.convertir(unidadLonguitud.cm)).to.be.equal(70);
        });
    });

    describe('Tiempo', () => {
        it('7 hora = 420 minutos', () => {
            expect(tiempo.convertir(unidadTiempo.min)).to.be.equal(420);
        });
    });

    describe('Temperatura', () => {
        it('30 C = 30 Re', () => {
            expect(temperatura.convertir(unidadTemperatura.Re)).to.be.equal(30);
        });
    });

    describe('Fuerza', () => {
        it('1 newton = 10000 g', () => {
            expect(fuerza.convertir(unidadFuerza.dinas)).to.be.equal(10000);
        });
    });

    describe('Volumen', () => {
        it('10 km3 = 10000 hm3', () => {
            expect(volumen.convertir(unidadVolumen.hm3)).to.be.equal(10000);
        });
    });

});