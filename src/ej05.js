import { URL } from 'node:url';
let miUrl    = null;
let miObjeto = null;
miUrl    = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
miObjeto = parsearUrl (miUrl);
console.log(miObjeto);

function parsearUrl(laURL)
{
    const devuelve = new URL(laURL);
    return {
        host: devuelve.origin, 
        pathname: devuelve.pathname, 
        parametros: devuelve.searchParams
    };
}   