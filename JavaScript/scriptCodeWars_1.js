//Ejercicio #1
function firstNonConsecutive(arr) {

  if (arr.lenght < 2) {
    console.log('Wep');
    return null;  
  }

  for (var i = 1; i < arr.length; i++) {
    console.log(i);
    pastElement = arr[i - 1];
    actualElement = arr[i];
  
    if (pastElement + 1 != actualElement){
      return actualElement;
    } 
  }

  return null;
}

const first = firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]);
console.log(first);

//Ejercicio #2
function expressionMatter(a, b, c) {
  if((a<0||a>10) || (b<0||b>10) || (c<0||c>10)){
    return null;
  }

  let arr=[(a*b*c),(a+(b*c)),((a+b)*c),(a*(b+c)),(a+b+c)];

  let max = Math.max(...arr);
  return max;
}

//Ejercicio #3
function divide(weight){

if((weight<=0 && weight<=100) ||weight==2)
return false;

return !(weight%2);
}

//En JavaScript '0' es equivalente a false */
function divide2(weight){
  return weight > 2 && !(weight % 2);
}

var test=divide(90);
console.log(test);

//Ejercicio #4
function index(array, n){
  return (array.length-1)<n ? -1 : array[n]**n;
 }

 var num=index([1,2,3],2);
 console.log(num);