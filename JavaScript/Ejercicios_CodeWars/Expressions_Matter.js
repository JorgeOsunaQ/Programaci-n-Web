//Ejercicio Expressions Matter
function expressionMatter(a, b, c) {
    if((a<0||a>10) || (b<0||b>10) || (c<0||c>10)){
      return null;
    }
  
    let arr=[(a*b*c),(a+(b*c)),((a+b)*c),(a*(b+c)),(a+b+c)];
  
    let max = Math.max(...arr);
    return max;
  }