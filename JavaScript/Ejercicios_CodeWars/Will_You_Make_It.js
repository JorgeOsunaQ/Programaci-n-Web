//Ejercicio Will You Make It?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    let distanceFuel=mpg*fuelLeft;
    return distanceFuel>=distanceToPump;
  };
