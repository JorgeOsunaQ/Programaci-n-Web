//Ejercicio Grasshopper - Grade book
function getGrade (s1, s2, s3) {
    let prom=(s1+s2+s3)/3;
    let temp='';
    
    switch(true){
      case (prom>=90 && prom<=100):
        temp='A';
        break;
      case (prom>=80 && prom<90):
        temp='B';
        break;
      case (prom>=70 && prom<80):
        temp='C';
        break;
      case (prom>=60 && prom<70):
        temp='D';
        break;
      case (prom>=0 && prom<60):
        temp='F';
        break;
    }
    return temp;
  }