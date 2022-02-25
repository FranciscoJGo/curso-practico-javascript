function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    )
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

const lista1 = [
    100,
    200,
    300,
    50000000,
    8,4,3,5,7,1,
];

const sortLista1 = [...lista1];
sortLista1.sort((a,b) => a - b);

const mitadLista1 = parseInt(sortLista1.length / 2);

function esPar(numerito) {
    if(numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;

if (esPar(sortLista1.length)) {
    const elemento1 = sortLista1[mitadLista1  - 1];
    const elemento2 = sortLista1[mitadLista1];

    const promedioElemento1y2 = calcularMediaAritmetica([elemento1,elemento2]);

    mediana = Math.floor(promedioElemento1y2);
} else {
    mediana = sortLista1[mitadLista1];
}