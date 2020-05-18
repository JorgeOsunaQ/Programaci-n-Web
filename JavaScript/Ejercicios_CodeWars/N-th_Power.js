//Ejercicio N-th Power
function index(array, n){
    return (array.length-1)<n ? -1 : array[n]**n;
   }