//import fs from "fs";
import { promises as fs } from 'fs'; 
const ARCHIVO_ENTRADA = "./archivo-entrada.txt";
const ARCHIVO_SALIDA = "./archivo-salida.txt";
console.clear();
copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA);
let a = leer(ARCHIVO_ENTRADA)
console.log(a)
async function copiar(origen, destino) {
  try {
    await fs.copyFile(origen, destino);
    console.log(`Copied ${origen} to ${destino}`);
  } catch (err) {
    console.error(`Got an error trying to copy the file: ${err.message}`);
  }
}
async function leer(entrada) {
    let copiado 
    try {
      const data = await fs.readFile(entrada);
      console.log(data.toString());
      copiado = data
    } catch (error) {
      copiado = console.error(`Got an error trying to read the file: {error.message}`);
   }
   return copiado
  }