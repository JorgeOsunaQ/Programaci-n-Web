//Ejercicio Ride Length
let num=808/60;
let minutos=Math.round(((num%1))*60)
let hora=Math.floor(num)+minutos.toString()

console.log(parseInt(hora))
let sum=0
while(hora){
    sum+=hora%10
    hora=Math.floor(hora/10)
}

function generarNumerosAleatorios(cantidad){
    const numeros=[...Array(cantidad)].map(()=>{
        return Math.floor(Math.random()*(400 - 1) + 1);
    })
    return numeros;
  }

console.log(generarNumerosAleatorios(4))