for (var i = 0; i < 10; i++) {
  let etiquetaP = document.createElement("p");
  etiquetaP.innerText = Math.floor(Math.random() * 100);
  etiquetaP.style.paddingLeft = "1.2rem";
  document.body.append(etiquetaP);
}

