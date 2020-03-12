function multiplicacion(n1, n2) {
  if (!n2) n2 = 1;
  return n1 * n2;
}

function generador(etiqueta, contenido, cantidad) {
  let etiquetas = document.createElement("div");
  if (!etiqueta) etiqueta = document.createElement("div");
  if (!contenido) contenido = "Default";
  if (!cantidad) cantidad = 1;

  for (var i = 0; i < cantidad; i++) {
    let elemento = document.createElement(etiqueta);
    elemento.append(contenido);
    elemento.style.paddingLeft = "1.5rem";
    etiquetas.append(elemento);
  }
  return etiquetas;
}

var etiquetas = generador("p", "Hola", 10);
document.body.append(etiquetas);
