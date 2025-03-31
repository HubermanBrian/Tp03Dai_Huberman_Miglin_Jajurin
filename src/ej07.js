import { getCurrencyAbbreviation } from 'currency-map-country';
import { getCountryByAbbreviation } from 'currency-map-country';
let monedaDelPais, codigoPais;

codigoPais = 'AR';

monedaDelPais = obtenerMoneda(codigoPais);

console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);


codigoPais = 'UZA';

monedaDelPais = obtenerMoneda(codigoPais);

console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

function obtenerMoneda(codigo)
{   
    let moneda
    moneda = getCurrencyAbbreviation(getCountryByAbbreviation(codigo))
    return moneda
}