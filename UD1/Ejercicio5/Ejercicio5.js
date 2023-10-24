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