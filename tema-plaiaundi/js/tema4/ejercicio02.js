/*
 * Tema 4 · Fundamentos y particularidades de JavaScript
 * Ejercicio 2
 */

const primero = {
   titular: "Ana",
   saldo: 500,
   describir() {
        return `${this.titular} tiene ${this.saldo} €`;
    }
};

const segundo = {
   titular: "Luis",
   saldo: 1200
};

segundo.describir = primero.describir;

console.log(primero.describir());
console.log(segundo.describir());
