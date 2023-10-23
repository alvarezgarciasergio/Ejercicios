const dia = 1;
const mes = 1;

const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // Días de cada mes en 2021
const diasDeLaSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

// Calculamos los días transcurridos desde el 1 de enero
let diasTranscurridos = 0;

for (let i = 0; i < mes - 1; i++) {
    diasTranscurridos += diasPorMes[i];
}

diasTranscurridos += dia - 1; // Le restamos 1 para ajustar al día de inicio

// El 1 de enero de 2021 fue viernes, por lo que empezamos desde el índice 4
let diaDeLaSemana = (4 + diasTranscurridos) % 7;

console.log(diasDeLaSemana[diaDeLaSemana]);