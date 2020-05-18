//Ejercicio Two Oldest Ages
let ages=[4,6,2,10]

ages.sort(function(a, b) {
    return a - b;
  });
//let res=[ages[ages.length-2],ages[ages.length-1]]
let res=ages.slice(-2)
console.log(res)