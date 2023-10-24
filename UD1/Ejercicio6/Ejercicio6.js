/*Tienes una estructura que contiene los alumnos matriculados en cada uno de los módulos de un
ciclo de formación profesional. La estructura tiene el siguiente formato:

const modulos = [
 {
 nombre: 'Sistemas informáticos',
 curso: 1,
 alumnos: [
 'Don Pepito', 'Perico', 'Don José'
 ]
 },
 ...
 {
 nombre: 'Desarrollo Web en entorno cliente',
 curso: 2,
 asignatura: '',
 alumnos: [
 'Juan', 'Perico', 'Andrés', 'Don Pepito'
 ]
 },
 ...
]
Construye un programa que imprima los alumnos que están matriculados a la vez en asignaturas
de primer y segundo curso.
Con los datos visibles en el ejemplo anterior debería imprimir: 'Perico' y 'Don Pepito'
Ten en cuenta que la estructura puede contener más asignaturas de primero y segundo, y no
tienen por qué estar en orden.*/

const modulos = [
    {
        nombre: 'Sistemas informáticos',
        curso: 1,
        alumnos: ['Don Pepito', 'Perico', 'Don José']
    },
    {
        nombre: 'Desarrollo Web en entorno cliente',
        curso: 2,
        alumnos: ['Juan', 'Perico', 'Andrés', 'Don Pepito']
    },
]

let alumnosPrimero = new Set()
let alumnosSegundo = new Set()

/*for (let i = 0; i < modulos.length; i++) {
    let modulo = modulos[i];
    if (modulo.curso === 1) {
        for (let j = 0; j < modulo.alumnos.length; j++) {
            let alumno = modulo.alumnos[j];
            alumnosPrimero.add(alumno);
        }
    } else if (modulo.curso === 2) {
        for (let j = 0; j < modulo.alumnos.length; j++) {
            let alumno = modulo.alumnos[j];
            alumnosSegundo.add(alumno);
        }
    }
}*/
for(let modulo of modulos) {
    if(modulo.curso === 1) {
        for(let alumno of modulo.alumnos) {
            alumnosPrimero.add(alumno)
        }
    } else if(modulo.curso === 2) {
        for(let alumno of modulo.alumnos) {
            alumnosSegundo.add(alumno)
        }
    }
}


let matriculadosEnAmbosCursos = []
for (let alumno of alumnosPrimero) {
    if (alumnosSegundo.has(alumno)) {
        matriculadosEnAmbosCursos.push(alumno)
    }
}


console.log("Alumnos matriculados en ambos cursos:")
for(let alumno of matriculadosEnAmbosCursos) {
    console.log(alumno)
}

