//Ejercicio Simple Fun #3: Late Ride
function lateRide(n) {
    //coding and coding..
    let num=n/60;
    let minutos=Math.round(((num%1))*60)
    let hora=Math.floor(num)+minutos.toString()
    
    
    let sum=0
    while(hora){
        sum+=hora%10
        hora=Math.floor(hora/10)
    }
    
    return sum
  }

fecha= new Date('2020/05/18')
console.log(fecha)