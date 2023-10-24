/*
Prepara un programa que construya una matriz de veinte números aleatorios entre 0 y 10. Una vez
construida dicha matriz, el programa debe calcular cual es la moda.
Para obtener un número aleatorio entre 0 y 10 puedes utilizar el siguiente código:
Math.floor(Math.random() * 10);
Un ejemplo de ejecución del programa sería:
[ 1, 2, 4, 5, 4 ,4 ,4 ,4 ,4 ,4 ,0 ,7, 8, 4 ,9, 7, 3, 3, 1, 0]
Moda: 4
*/

let matriz=[]

for (let i=0;i<20;i++){
    matriz[i] =Math.floor(Math.random()*10)
}

for (let i=0; i<matriz.length;i++){
    for (let j=0; j<matriz.length -1;j++){
        if (matriz[j]>matriz[j+1]){
            let cambio = matriz[j]
            matriz[j] = matriz [j+1]
            matriz [j+1] = cambio
        }
    }
}

let repeticiones = {}
let maxRepeticiones = 0
let moda

for (let i=0;i<matriz.length;i++){
    let numero = matriz[i]
    if(repeticiones[numero]>0){
        repeticiones[numero]++
    }else{
        repeticiones[numero] = 1
    }
}

for (let numero in repeticiones){
    if (repeticiones[numero]>maxRepeticiones){
        maxRepeticiones=repeticiones[numero]
        moda = Number(numero)
    }
}

console.log("Matriz: [" + matriz.join(", ") + "]");
console.log("Moda: ", moda)