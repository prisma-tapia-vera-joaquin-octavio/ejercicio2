let a = 10;
let b = 5;

function sumaJoaquinOctavioTapiaVera(a, b){
    return a + b;
}

function restaAlejandroAmaruCondoriMorales(a, b){
    return a-b;
}

function divisionCalepGiovanniPatinoLazarte(a, b){
    if(b === 0){
        return "Error: no se puede dividir entre cero";
    }
    return a / b;
}

function multiplicacionAlexNinaCopatiti(a,b){
    return a * b;
}
function moduloWilberOjedaValente1(a, b){
    return a % b;
}
function potencia_anabel_leyva(a, b) {
    return Math.pow(a, b);
}

console.log("La suma es: " + sumaJoaquinOctavioTapiaVera(a, b));
console.log("La resta es: " + restaAlejandroAmaruCondoriMorales(a, b));
console.log("la division es:" + divisionCalepGiovanniPatinoLazarte(a,b));
console.log("la multiplicacion es:" + multiplicacionAlexNinaCopatiti(a,b));
console.log("El modulo es: " + moduloWilberOjedaValente1(a, b));
console.log("La potencia es: " + potencia_anabel_leyva(a, b));
