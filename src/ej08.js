import { OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID } from './modules/OMBDWrapper.js';

let resultado = await OMDBSearchByPage("cars", 1);
console.log("OMDBSearchByPage", resultado);

let resultadoCompleto = await OMDBSearchComplete("cars");
console.log("OMDBSearchComplete", resultadoCompleto);

let detalles = await OMDBGetByImdbID("tt3896198");
console.log("OMDBGetByImdbID", detalles);