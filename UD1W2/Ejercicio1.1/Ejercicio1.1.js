function uniques (...argumentos){
    const set = new Set()
    const resultado = []
  
    for (let arg of argumentos){
      let tamañoPrevio = set.size
      set.add(arg)
      if (set.size !== tamañoPrevio){
        resultado.push(arg)
      }
    }
    return resultado
  }
  console.log(uniques(2, 4, 'patata', [1,2], [1, 2], 'patata', 4))
  