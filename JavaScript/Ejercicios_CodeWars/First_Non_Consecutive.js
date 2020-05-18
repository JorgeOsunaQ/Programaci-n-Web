//Ejercicio Find the first non-consecutive number
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