function diamante (letra){
    const letras = 'ABCDEFGHIJKLMNOPQRSTUWXYZ'
    const indice = letras.indexOf(letra)

    let cuerpo = []

    for (i=0; i<=indice; i++){
        //Creamos una fila por cada iteración del bucle
        let fila = []

        for (j=0; j<indice*2+1; j++){
            //determinamos la posición que debe ir la letras
            if(j === indice -i || j === indice +i){
                //ponemos la letra
                fila.push(letras[i])
            }else{
                //en el resto de posiciones que no haya letra, pondremos un guión
                fila.push('-')
            }
        }
        cuerpo.push(fila.join('')); // unimos las filas y lo metemos en la matriz (cuerpo)

    }
    //Iteramos para sacar cada fila por separado
    for (let fila of cuerpo) {
        console.log(fila);
    }
     // Mostrar la parte inferior del diamante, omitiendo la última fila (por eso el -2)
     for (let i = cuerpo.length -2; i >= 0; i--) {
        console.log(cuerpo[i]);
    }
}


diamante('C')



