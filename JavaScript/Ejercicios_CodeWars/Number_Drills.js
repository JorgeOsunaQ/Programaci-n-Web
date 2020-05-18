//Ejercicio Thinkful - Number Drills: Blue and red marbles
function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    blueActual=blueStart-bluePulled;
    redActual=redStart-redPulled;
    return blueActual/(blueActual+redActual);
}