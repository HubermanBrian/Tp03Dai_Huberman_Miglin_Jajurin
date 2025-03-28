let textoEntrada1 = "Escuela",
  textoEntrada2 = "ORT";
let textoSalida = "";
textoSalida = ConcatInvert(textoEntrada1, textoEntrada2);
console.clear();
console.log("Texto de entrada" + textoEntrada1 + " Y " + textoEntrada2);
console.log("Texto salida:" + textoSalida);

function ConcatInvert(textoEntrada1, textoEntrada2) {
  let concatenado;
  let retorno = "";
  concatenado = textoEntrada1 + textoEntrada2;
  for (let i = concatenado.length - 1; i >= 0; i--) {
    retorno += concatenado[i];
  }
  return retorno;
}
