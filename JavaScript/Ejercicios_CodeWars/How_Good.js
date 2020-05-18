//Ejercicio How good are you really?
function betterThanAverage(classPoints, yourPoints) {
    var points=classPoints.reduce((previo,actual)=>previo+actual);
    return (points/classPoints.length)<yourPoints;
  }