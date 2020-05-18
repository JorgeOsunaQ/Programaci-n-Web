//Ride Length
let num=808/60;
let minutos=Math.round(((num%1))*60)
let hora=Math.floor(num)+minutos.toString()

console.log(parseInt(hora))
let sum=0
while(hora){
    sum+=hora%10
    hora=Math.floor(hora/10)
}

//Two Oldest Ages
let ages=[4,6,2,10]

ages.sort(function(a, b) {
    return a - b;
  });
//let res=[ages[ages.length-2],ages[ages.length-1]]
let res=ages.slice(-2)
console.log(res)