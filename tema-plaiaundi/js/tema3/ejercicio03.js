/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 1 · ¿Qué tipo tengo realmente?
 */

const alumnos = [
  {nombre: "Ane", nota: 8},
  {nombre: "Iker", nota: 4},
  {nombre: "June", nota: 7}
];

const new_alumnos = alumnos.map(alumno => ({...alumno, aprobado: alumno.nota >= 5}));

console.log('Alumnos:', new_alumnos);
