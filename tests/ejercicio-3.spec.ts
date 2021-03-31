import 'mocha';
import {expect} from 'chai';
import {Documentales} from '../src/ejercicio-3/tipoDocumentales';
import {Peliculas} from '../src/ejercicio-3/tipoPeliculas';
import {Series} from '../src/ejercicio-3/tipoSeries';

const doc1 = {nombre: "doc1", tipo: "tipo1"};
const doc2 = {nombre: "doc2", tipo: "tipo2"};
const doc3 = {nombre: "doc3", tipo: "tipo3"};

const peli1 = {nombre: "p1", tipo: "tipo1", year: 2019};
const peli2 = {nombre: "p2", tipo: "tipo2", year: 2020};
const peli3 = {nombre: "p3", tipo: "tipo1", year: 2021};
const peli4 = {nombre: "p4", tipo: "tipo2", year: 2022};

const serie1 = {nombre: "s1", tipo: "tipo1", year: 2019, temporar:2, estrealla: 5};
const serie2 = {nombre: "s2", tipo: "tipo2", year: 2020, temporar:5, estrealla: 5};

const collecion1 = new Documentales([doc1, doc2, doc3]);
const collecion2 = new Peliculas([peli1, peli2, peli3, peli4]);
const collecion3 = new Series([serie1, serie2]);

describe(`Pracitca6_ejercicio3_prueba`, () => {
    
    describe('Documentales:', () => {
        it('La cantidad de documentales es 3.', () => {
            expect(collecion1.getNumber()).to.be.equal(3);
        });
    });

    describe('Peliculas:', () => {
        it('La cantidad de peliculas es 4.', () => {
            expect(collecion2.getNumber()).to.be.equal(4);
        });
    });

    describe('Series:', () => {
        it('La cantidad de documentales es 2.', () => {
            expect(collecion3.getNumber()).to.be.equal(2);
        });
    });

    describe('Busqueda_Documentales', () => {
        it('Documentales que tiene nombre doc1', () => {
            expect(collecion1.busqueda("nombre","doc1")[0].nombre).to.be.equal('doc1');
        });

        it('Documentales que son de tipo 3, su nombre es doc3', () => {
            expect(collecion1.busqueda("tipo","tipo3")[0].nombre).to.be.equal('doc3');
        });
    });

    describe('Busqueda_Peliculas', () => {
        it('Peliculas que tiene nombre p2', () => {
            expect(collecion2.busqueda("nombre","p2")[0].nombre).to.be.equal('p2');
        });

        it('Peliculas de año 2021, su nombre es p1', () => {
            expect(collecion2.busqueda("year","2021")[0].nombre).to.be.equal('p1');
        });
    });

    describe('Busqueda_Series', () => {
        it('Series que tiene nombre s1, su nombre es el s1', () => {
            expect(collecion3.busqueda("nombre","s1")[0].nombre).to.be.equal('s1');
        });

        it('Series que tiene 5 temporadas, su nombre es s2', () => {
            expect(collecion3.busqueda("temporar","5")[0].nombre).to.be.equal('s2');
        });
    });
});