function spinWords(string){
    let fraseSeparada = string.split(" ")
    let fraseFinal = []
    while (fraseSeparada.length != 0) {
        let palabraIndividual = fraseSeparada.shift()
        let palabraDadaVuelta = ""
        let individualSeparada = palabraIndividual.split("")
        for(i = (individualSeparada.length-1); i>=0; i--){
            //if(individualSeparada.length >= 5){
              //  palabraDadaVuelta += individualSeparada[i]
            //}else{
              //  palabraDadaVuelta = individualSeparada.join("")
            //}
            individualSeparada.length >= 5 ? palabraDadaVuelta += individualSeparada[i] : palabraDadaVuelta = individualSeparada.join("")
        }
        fraseFinal.push(palabraDadaVuelta)
    }
    return fraseFinal.join(" ");
}

console.log(spinWords("Tu vieja"));
console.log(spinWords("Hermosas flores ahre"));
console.log(spinWords("Supercalifragilisticuespialidoso"));
console.log(spinWords("Ya me quede sin ideas"));
console.log(spinWords("Sofia Perez Zavala"));


