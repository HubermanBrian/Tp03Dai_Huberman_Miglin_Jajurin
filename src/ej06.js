import { URL } from 'node:url';
let miUrl    = null;
let miObjeto = null;
miUrl    = 'edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
miObjeto = parsearUrl (miUrl);
console.log(miObjeto);

function parsearUrl(laURL)
{
    
    try {
        const devuelve = new URL(laURL);
            return {
                host: devuelve.origin, 
                pathname: devuelve.pathname, 
                parametros: devuelve.searchParams
                }
        
    }
    catch (err) {
        console.error(`Got an error trying to read the URL: ${err.message}`);
        return null
    }
}   















